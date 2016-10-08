const FS = require('node-puff/fs')
const camelCase = require('lodash.camelcase')
const containerPkgPath =
  require.resolve(`${__dirname}/../packages/starry/package`)
const containerPkg = require(containerPkgPath)
const monorepoPkgPath = require.resolve(`${__dirname}/../package`)
const monorepoPkg = require(monorepoPkgPath)
const assert = require('assert')
const { EOL } = require('os')
const sortPackageJson = require('sort-package-json')
const encode = require('encody')

async function run() {
  try {
    let packages = (await FS.readdir(`${__dirname}/../packages`)) // Get all packages
      .filter(x => x !== 'starry') // Exclude "container" package (`starry`)

    packages = await Promise.all(packages.map(p => extractPackageInfo(p)))
    await Promise.all([
      setupContainerPackage(packages),
      setupIndividualPackages(packages)
    ])
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

async function extractPackageInfo(require_id) {
  let require_base = require_id.replace(/^starry\./, '')
  let is_private = require_base.startsWith('_')
  let fn_name = camelCase(require_base)
  let require_path = `${__dirname}/../packages/${require_id}`
  let package_json_path = require.resolve(`${require_path}/package`)
  let package_json = require(package_json_path)
  let doc_md_path = `${require_path}/doc.md`
  let doc_md = denormalizeEOL(await FS.readFile(doc_md_path, 'utf8'))

  return {
    require_id,
    require_base,
    is_private,
    fn_name,
    require_path,
    package_json,
    package_json_path,
    doc_md_path,
    doc_md
  }
}

async function setupContainerPackage(packages) {
  let devDependencies = {}
  let indexExports = []
  let p = []
  let public_docs = []

  for (let info of packages) {
    let { require_base, is_private, package_json_path, doc_md, fn_name } = info

    if (is_private) {
      continue
    }

    // Add package to devDependencies
    let package_json = require(package_json_path)
    devDependencies[require_base] = package_json.version

    // Add to exports
    indexExports.push([fn_name, require_base])

    // Add to publicly-shown docs
    public_docs.push({ fn_name, doc_md })
  }

  // Commit devDependencies
  containerPkg.devDependencies =
    Object.assign({}, containerPkg.devDependencies, devDependencies)
  p.push(FS.writeFile(containerPkgPath, outputJSON(containerPkg), 'utf8'))

  // Commit index.js
  let indexjs = `module.exports = {
${indexExports.map(([fn_name, require_base]) => `${JSON.stringify(fn_name)}: require.resolve(${JSON.stringify(require_base)})`).join(`,\n`)}
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
    await FS.writeFile(`${__dirname}/../API.md`, normalizeEOLEOF(api_md), 'utf8')
  }
  p.push(buildApiMd())

  await Promise.all(p)
}

function setupIndividualPackages(packages) {
  return Promise.all(packages.map(pkg => {
    return setupPackage(pkg)
  }))
}

async function setupPackage({ package_json, package_json_path, require_id, require_path, doc_md }) {
  const memberOfThe = `Member of the starry suite—modular functions for iterable objects.`

  async function setupPackageJson() {
    // `name` must be equal to the directory name.
    package_json.name = require_id

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
    await FS.writeFile(`${require_path}/readme.md`, normalizeEOLEOF(readmeMd), 'utf8')
  }

  await Promise.all([
    setupPackageJson(),
    setupReadme()
  ])
}

function renderShields(shields) {
  return shields.map(([title, img, link]) => `[![${title}](https://img.shields.io/${img}.svg?style=flat-square)](${link})`).join(' ')
}

function outputJSON(obj) {
  return normalizeEOLEOF(JSON.stringify(obj, null, 2))
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
