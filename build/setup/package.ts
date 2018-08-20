const memberOfThe = `Member of the starry suite—modular functions for iterable objects.`
import sortPackageJson = require('sort-package-json')
import merge = require('lodash.merge')
import _FS = require('mz/fs')
const FS = _FS as any
import encode = require('encody')
import Path = require('path')
import { EOL } from 'os'
import chalk = require('chalk')
import RootPackage from './root-package'
import IPackageJson from './package-json-schema'
import outputJSON from './output-json'
import renderShields from './render-shields'
import normalizeEOLEOF from './normalize-eol-eof'

function log(...s) {
  console.error(chalk`{magenta package}`, ...s)
}

/**
 * Defines methods on how to manipulate each sub-package.
 */
class Package {
  private package_json_path: string
  private require_id: string
  private require_path: string
  private doc_md: string

  private props: Partial<IPackageJson> = { scripts: {} }

  constructor(opts: {
    package_json_path: string
    require_id: string
    require_path: string
    doc_md: string
  }) {
    Object.assign(this, opts)
  }

  log(msg, ...params) {
    msg = chalk`{green ${this.require_id}} ${msg}`
    log(msg, ...params)
  }

  async run() {
    await this.typescript()
    const pkg: IPackageJson = await this.packageJson()
    await Promise.all([this.readme_md(pkg), this.npmignore()])
  }

  async packageJson() {
    let package_json: Partial<IPackageJson> = {}

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
    package_json.keywords = ['starry-modularized'].concat(
      RootPackage.pkg.keywords || []
    )

    // Set repository
    package_json.repository = RootPackage.pkg.repository

    package_json.scripts = {
      pretest: 'tsc',
      test: 'ava',
      tsc: 'tsc'
    }

    package_json.ava = {
      files: ['test.js']
    }

    let existing_package_json = {}
    try {
      existing_package_json = require(this.package_json_path)
    } catch (err) {
      // package.json does not exist yet.
    }

    package_json = merge(
      { version: '0.0.0' },
      this.props,
      existing_package_json,
      package_json
    )

    // package.json consistency FTW!
    package_json = sortPackageJson(package_json)

    // Commit package.json
    await FS.writeFile(this.package_json_path, outputJSON(package_json), 'utf8')

    return package_json as IPackageJson
  } // packageJson

  async readme_md(pkg: IPackageJson) {
    let shields: [string, string, string][] = [
      [
        'npm',
        encode`npm/v/${this.require_id}`,
        encode`https://www.npmjs.com/package/${this.require_id}`
      ],
      [
        'node',
        encode`node/v/${this.require_id}`,
        'https://nodejs.org/en/download/'
      ]
    ]
    let shields2: [string, string, string][] = [
      [
        'Build Status',
        `travis/${RootPackage.pkg.repository}`,
        `https://travis-ci.org/${RootPackage.pkg.repository}`
      ],
      [
        'Coverage Status',
        `coveralls/${RootPackage.pkg.repository}`,
        `https://coveralls.io/github/${RootPackage.pkg.repository}`
      ]
    ]
    let content = `${memberOfThe}

${renderShields(shields)}

## Status

Applies to the whole suite.

${renderShields(shields2)}

## Usage

${this.doc_md}`
    await FS.writeFile(
      `${this.require_path}/readme.md`,
      normalizeEOLEOF(content)
    )
  } // readme_md()

  async npmignore() {
    // These files are not actually required in the published version:
    // doc.md and package_src.json.
    // Exclude index.ts; they confuse tsc when they exist in published packages.
    const content = ['doc.md', 'package-src.json', '*.ts', '!*.d.ts'].join('\n')
    await FS.writeFile(`${this.require_path}/.npmignore`, content)
  }

  async typescript() {
    let files = await FS.readdir(`${this.require_path}`)
    if (files.some(file => Path.extname(file) === '.ts')) {
      const tsconfigJson = {
        compilerOptions: {
          module: 'commonjs',
          alwaysStrict: true,
          declaration: true,
          strictNullChecks: true,
          target: 'ES2017',
          sourceMap: true
        },
        include: ['*.ts']
      }

      const s = this.props.scripts as { [key: string]: string }
      Object.assign(s, {
        tsc: 'tsc',
        pretest: 'npm run tsc'
      })

      const gitContent =
        ['*.d.ts', '*.js', '*.js.map', 'tsconfig.json', '.npmignore'].join(
          EOL
        ) + EOL

      await Promise.all([
        // Write tsconfig.json
        FS.writeFile(
          `${this.require_path}/tsconfig.json`,
          JSON.stringify(tsconfigJson, null, 2)
        ),
        // Write .gitignore
        FS.writeFile(`${this.require_path}/.gitignore`, gitContent)
      ])
    }
  } // typescript()
} // class PackageSetup

export default Package
