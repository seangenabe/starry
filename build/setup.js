const FS = require('mz/fs')
const camelCase = require('lodash.camelcase')
const root = `${__dirname}/..`
const containerPkgPath = require.resolve(`${root}/packages/starry/package`)
const containerPkg = require(containerPkgPath)
const monorepoPkgPath = require.resolve(`${root}/package`)
const monorepoPkg = require(monorepoPkgPath)
const { EOL } = require('os')
const sortPackageJson = require('sort-package-json')
const encode = require('encody')
const assign = require('lodash.assign')
const merge = require('lodash.merge')
const Path = require('path')

async function run() {
  try {
    let packages = (await FS.readdir(`${root}/packages`)) // Get all packages
      .filter(x => x !== 'starry') // Exclude "container" package (`starry`)

    packages = await Promise.all(packages.map(p => extractPackageInfo(p)))
    await Promise.all([
      setupContainerPackage(packages),
      setupIndividualPackages(packages)
    ])
  }
  catch (err) {
    console.error(err.stack)
    process.exit(1)
  }
}

async function extractPackageInfo(require_id) {
  let require_base = require_id.replace(/^starry\./, '')
  let is_private = require_base.startsWith('_')
  let fn_name = camelCase(require_base)
  let require_path = `${root}/packages/${require_id}`
  let package_json_path = `${require_path}/package.json`
  let package_src_json_path = `${require_path}/package-src.json`
  let doc_md_path = `${require_path}/doc.md`
  let doc_md = denormalizeEOL(await FS.readFile(doc_md_path, 'utf8'))

  return {
    require_id,
    require_base,
    is_private,
    fn_name,
    require_path,
    package_json_path,
    package_src_json_path,
    doc_md_path,
    doc_md
  }
}

async function setupContainerPackage(packages) {
  let dependencies = {}
  let indexExports = []
  let p = []
  let public_docs = []

  for (let info of packages) {
    let {
      is_private,
      package_json_path,
      doc_md,
      fn_name,
      require_id
    } = info

    if (is_private) {
      continue
    }

    // Add package to dependencies
    let version
    try {
      version = require(package_json_path).version
      if (!version) {
        throw new Error()
      }
    }
    catch (err) {
      version = '0'
    }
    dependencies[require_id] = `^${version}`

    // Add to exports
    indexExports.push([fn_name, require_id])

    // Add to publicly-shown docs
    public_docs.push({ fn_name, doc_md })
  }

  // Commit dependencies
  containerPkg.dependencies =
    Object.assign({}, containerPkg.dependencies, dependencies)
  p.push(FS.writeFile(containerPkgPath, outputJSON(containerPkg), 'utf8'))

  // Commit index.js
  let indexjs = `module.exports = {
${indexExports.map(([fn_name, require_id]) => `${JSON.stringify(fn_name)}: require(${JSON.stringify(require_id)})`).join(`,${EOL}`)}
}`
  p.push(FS.writeFile(`${__dirname}/../packages/starry/index.js`, normalizeEOLEOF(indexjs), 'utf8'))

  // API.md
  async function buildApiMd() {
    let api_md = `# API
${public_docs.map(({ fn_name, doc_md }) => {
      return `
## ${fn_name}

${doc_md}`
    }).join('')}`
    await FS.writeFile(`${root}/API.md`, normalizeEOLEOF(api_md), 'utf8')
  }
  p.push(buildApiMd())

  await Promise.all(p)
}

function setupIndividualPackages(packages) {
  return Promise.all(packages.map(pkg => {
    return setupPackage(pkg)
  }))
}

async function setupPackage({
    package_json_path,
    package_src_json_path,
    require_id,
    require_path,
    doc_md
  }) {

  const memberOfThe = `Member of the starry suite—modular functions for iterable objects.`

  async function setupPackageJson() {
    let package_json = {}

    // `name` must be equal to the directory name.
    package_json.name = require_id

    package_json.main = './index.js'

    // Set description.
    package_json.description = memberOfThe

    // Set homepage.
    package_json.homepage = monorepoPkg.homepage

    // Set license.
    package_json.license = monorepoPkg.license

    // Set engines
    package_json.engines = monorepoPkg.engines

    // Set keywords
    package_json.keywords =
      ['starry-modularized'].concat(monorepoPkg.keywords || [])

    // Set repository
    package_json.repository = monorepoPkg.repository

    package_json.scripts = {}

    // Set scripts.tsc
    if ((await FS.readdir(`${require_path}`))
      .some(file => Path.extname(file) === '.ts')) {

      package_json.scripts.tsc = 'tsc'
    }

    // merge package-src.json
    let package_src_json
    try {
      package_src_json = require(package_src_json_path)
      // Merge dependencies
      let { _dependencies = [] } = package_src_json
      delete package_src_json._dependencies
      let newDeps = {}
      for (let depString of _dependencies) {
        try {
          let dep_package_json = require(`${root}/packages/${depString}/package.json`)
          if (dep_package_json.version) {
            newDeps[depString] = `^${dep_package_json.version}`
          }
        }
        catch (err) {
          // invalid package; skip
        }
      }
      if (Object.keys(newDeps).length) {
        package_src_json.dependencies = newDeps
      }
    }
    catch (err) {
      package_src_json = {}
    }

    let existing_package_json = {}
    try {
      existing_package_json = require(package_json_path)
    }
    catch (err) {
      // package.json does not exist yet.
    }

    package_json = merge(
      { version: '0.0.0' },
      existing_package_json,
      package_json,
      package_src_json
    )

    // package.json consistency FTW!
    package_json = sortPackageJson(package_json)

    // Commit package.json
    await FS.writeFile(
      package_json_path,
      outputJSON(package_json),
      'utf8'
    )
  }

  async function setupReadme() {
    let shields = [
      ['npm', encode`npm/v/${require_id}`, encode`https://www.npmjs.com/package/${require_id}`],
      ['Dependency Status', encode`david/${require_id}`, encode`https://david-dm.org/${require_id}`],
      ['devDependency Status', encode`david/dev/${require_id}`, encode`https://david-dm.org/${require_id}#info=devDependencies`],
      ['node', encode`node/v/${require_id}`, 'https://nodejs.org/en/download/']
    ]
    let shields2 = [
      ['Build Status', `travis/${monorepoPkg.repository}`, `https://travis-ci.org/${monorepoPkg.repository}`],
      ['Coverage Status', `coveralls/${monorepoPkg.repository}`, `https://coveralls.io/github/${monorepoPkg.repository}`]
    ]
    let readmeMd = `${memberOfThe}

${renderShields(shields)}

## Status

Applies to the whole suite.

${renderShields(shields2)}

## Usage

${doc_md}`
    await FS.writeFile(`${require_path}/readme.md`, normalizeEOLEOF(readmeMd))
  }

  async function setupNpmignore() {
    // These files are not actually required in the published version.
    const content = `doc.md
package-src.json`
    await FS.writeFile(`${require_path}/.npmignore`, content)
  }

  async function setupTypescript() {
    let files = await FS.readdir(`${require_path}`)
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
      await FS.writeFile(
        `${require_path}/tsconfig.json`,
        JSON.stringify(tsconfigJson, null, 2)
      )
    }
  }

  await Promise.all([
    setupPackageJson(),
    setupReadme(),
    setupNpmignore(),
    setupTypescript()
  ])
}

function renderShields(shields) {
  return shields.map(([title, img, link]) => `[![${title}](https://img.shields.io/${img}.svg?style=flat-square)](${link})`).join(' ')
}

function outputJSON(obj) {
  return normalizeEOLEOF(JSON.stringify(sortPackageJson(obj), null, 2))
}

function normalizeEOLEOF(str) {
  return `${str.split('\n').join(EOL)}${EOL}`
}

function denormalizeEOL(str) {
  return str.split(/\r?\n/).join('\n')
}

if (require.main === module) {
  run()
}
