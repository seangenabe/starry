const memberOfThe = `Member of the starry suite—modular functions for iterable objects.`
import normalizeEOLEOF = require('./normalize-eol-eof')
import sortPackageJson = require('sort-package-json')
import PackageJson = require('./package-json-schema')
import merge = require('lodash.merge')
import _FS = require('mz/fs')
const FS = _FS as any
import outputJSON = require('./output-json')
import encode = require('encody')
import renderShields = require('./render-shields')
import Path = require('path')
import RootPackage = require('./root-package')
import { EOL } from 'os'
import { debuglog } from 'util'
const log = debuglog('setup')

// Defines methods on how to manipulate each sub-package.
class Package {

  private package_json_path: string
  private package_src_json_path: string
  private require_id: string
  private require_path: string
  private doc_md: string
  private root: RootPackage

  private props: Partial<PackageJson> = { scripts: {} }

  constructor(opts: {
    package_json_path: string,
    package_src_json_path: string,
    require_id: string,
    require_path: string,
    doc_md: string
    root: RootPackage
  }) {

    Object.assign(this, opts)
  }

  async run() {
    await Promise.all([
      this.readme_md(),
      this.npmignore(),
      (async () => {
        await this.typescript()
        await this.packageJson()
      })()
    ])
  }

  async packageJson() {
    let package_json: Partial<PackageJson> = {}

    // `name` must be equal to the directory name.
    package_json.name = this.require_id

    package_json.main = './index.js'

    // Set description.
    package_json.description = memberOfThe

    // Set homepage.
    package_json.homepage = RootPackage.pkg.homepage

    // Set license.
    package_json.license = RootPackage.pkg.license

    // Set engines
    package_json.engines = RootPackage.pkg.engines

    // Set keywords
    package_json.keywords =
      ['starry-modularized'].concat(RootPackage.pkg.keywords || [])

    // Set repository
    package_json.repository = RootPackage.pkg.repository

    package_json.scripts = {}

    // merge package-src.json
    let package_src_json: PackageSrcJson
    try {
      package_src_json = require(this.package_src_json_path)
      // Merge dependencies
      let { _dependencies = [] } = package_src_json
      delete package_src_json._dependencies
      let newDeps: { [key: string]: string } = {}
      for (let depString of _dependencies) {
        try {
          let dep_package_json: PackageJson =
            require(`${RootPackage.path}/packages/${depString}/package.json`)

          if (dep_package_json.version) {
            newDeps[depString] = `^${dep_package_json.version}`
          }
        }
        catch (err) {
          // invalid package; skip
        }
      }
      if (Object.keys(newDeps).length) {
        Object.assign(package_src_json.dependencies, newDeps)
      }
    }
    catch (err) {
      package_src_json = {}
    }

    let existing_package_json = {}
    try {
      existing_package_json = require(this.package_json_path)
    }
    catch (err) {
      // package.json does not exist yet.
    }

    package_json = merge(
      { version: '0.0.0' },
      this.props,
      existing_package_json,
      package_json,
      package_src_json
    )

    // package.json consistency FTW!
    package_json = sortPackageJson(package_json)

    // Commit package.json
    await FS.writeFile(
      this.package_json_path,
      outputJSON(package_json),
      'utf8'
    )
  } // packageJson

  async readme_md() {
    let shields: [string, string, string][] = [
      ['npm', encode`npm/v/${this.require_id}`, encode`https://www.npmjs.com/package/${this.require_id}`],
      ['Dependency Status', encode`david/${this.require_id}`, encode`https://david-dm.org/${this.require_id}`],
      ['devDependency Status', encode`david/dev/${this.require_id}`, encode`https://david-dm.org/${this.require_id}#info=devDependencies`],
      ['node', encode`node/v/${this.require_id}`, 'https://nodejs.org/en/download/']
    ]
    let shields2: [string, string, string][] = [
      ['Build Status', `travis/${RootPackage.pkg.repository}`, `https://travis-ci.org/${RootPackage.pkg.repository}`],
      ['Coverage Status', `coveralls/${RootPackage.pkg.repository}`, `https://coveralls.io/github/${RootPackage.pkg.repository}`]
    ]
    let content = `${memberOfThe}

${renderShields(shields)}

## Status

Applies to the whole suite.

${renderShields(shields2)}

## Usage

${this.doc_md}`
    await FS.writeFile(`${this.require_path}/readme.md`, normalizeEOLEOF(content))
  }

  async npmignore() {
    // These files are not actually required in the published version.
    const content = ['doc.md', 'package-src.json'].join('\n')
    await FS.writeFile(`${this.require_path}/.npmignore`, content)
  }

  async typescript() {
    let files = await FS.readdir(`${this.require_path}`)
    if (files.some(file => Path.extname(file) === '.ts')) {
      const tsconfigJson = {
        "compilerOptions": {
          "module": "commonjs",
          "alwaysStrict": true,
          "declaration": true,
          "strictNullChecks": true,
          "target": "ES2017",
          "sourceMap": true
        }
      }

      const s = this.props.scripts as { [key: string]: string }
      s.tsc = 'tsc'

      const giContent = ['index.d.ts', 'index.js', 'index.js.map'].join(EOL)

      await Promise.all([
        // Write tsconfig.json
        FS.writeFile(
          `${this.require_path}/tsconfig.json`,
          JSON.stringify(tsconfigJson, null, 2)
        ),
        // Write .gitignore
        FS.writeFile(`${this.require_path}/.gitignore`, giContent)
      ])
    }
  }

} // class PackageSetup

type PackageSrcJson = Partial<PackageJson> & {
  _dependencies?: string[]
}

export = Package