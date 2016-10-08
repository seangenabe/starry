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

    let p = []
    p.push(setupContainerPackage(packages))
    p.push(setupIndividualPackages(packages))
    await Promise.all(p)
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

async function setupContainerPackage(packages) {
  let devDependencies = {}
  let indexExports = []
  let p = []
  let docs = []

  for (let pkgName of packages) {
    let key = pkgName.replace(/^starry\./, '')
    if (key.startsWith('_')) {
      continue // Exclude private packages (starts with _)
    }
    let ccKey = camelCase(key)

    let packagePath = `${__dirname}/../packages/${pkgName}`

    // Add package to devDependencies
    devDependencies[pkgName] =
      require(`${packagePath}/package`).version

    // Add to exports
    indexExports.push([ccKey, pkgName])

    docs = {
      name: pkgName,
      ccKey,
      doc: FS.readFile(`${packagePath}/doc.md`, 'utf8')
    }
  }

  // Commit devDependencies
  containerPkg.devDependencies =
    Object.assign({}, containerPkg.devDependencies, devDependencies)
  p.push(FS.writeFile(containerPkgPath, JSON.stringify(containerPkg, null, 2), 'utf8'))

  // Commit index.js
  let indexjs = `module.exports = {
${indexExports.map(([ccKey, pkgName]) => `${JSON.stringify(ccKey)}: require.resolve(${JSON.stringify(pkgName)})`).join(`,${EOL}`)}
}`
  p.push(FS.writeFile(`${__dirname}/../packages/starry/index.js`, indexjs, 'utf8'))

  // API.md
  async function buildApiMd() {
    packages.map(async packageName => {
      let packageDir = `${__dirname}/../packages/${packageName}`
      let doc = await FS.readFile(`${packageDir}/doc.md`)
      let section = `## `
    })
  }
  p.push(buildApiMd())

  await Promise.all(p)
}

function setupIndividualPackages(packages) {
  return Promise.all(packages.map(pkg => setupPackage(pkg)))
}

async function setupPackage(packageName) {
  let packageDir = `${__dirname}/../packages/${packageName}`
  const memberOfThe = `Member of the starry suite—modular functions for iterable objects.`

  async function setupPackageJson() {
    // `name` must be equal to the directory name.
    let packageJsonPath = require.resolve(`${packageDir}/package`)
    let packageJson = require(packageJsonPath)
    packageJson.name = packageName

    // Set description.
    packageJson.description = memberOfThe

    // Set homepage.
    packageJson.homepage = monorepoPkg.homepage

    // Set license.
    packageJson.license = monorepoPkg.license

    // Set engines
    packageJson.engines = monorepoPkg.engines

    // Set keywords
    packageJson.keywords =
      ['starry-modularized'].concat(monorepoPkg.keywords || [])

    // Set repository
    packageJson.repository = monorepoPkg.repository

    // package.json consistency FTW!
    packageJson = sortPackageJson(packageJson)

    // Commit package.json
    await FS.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      'utf8'
    )
  }

  async function setupReadme() {
    let shields = [
      ['npm', encode`npm/v/${packageName}`, encode`https://www.npmjs.com/package/${packageName}`],
      ['Dependency Status', encode`david/${packageName}`, encode`https://david-dm.org/${packageName}`],
      ['devDependency Status', encode`david/dev/${packageName}`, encode`https://david-dm.org/${packageName}#info=devDependencies`],
      ['node', encode`node/v/${packageName}`, 'https://nodejs.org/en/download/']
    ]
    let shields2 = [
      ['Build Status', `travis/${monorepoPkg.repository}`, `https://travis-ci.org/${monorepoPkg.repository}`],
      ['Coverage Status', `coveralls/${monorepoPkg.repository}`, `https://coveralls.io/github/${monorepoPkg.repository}`]
    ]
    let doc = await FS.readFile(`${packageDir}/doc.md`)
    let readmeMd = `${memberOfThe}

${renderShields(shields)}

## Status

Applies to the whole suite.

${renderShields(shields2)}

## Usage

${doc}`
    await FS.writeFile(`${packageDir}/readme.md`, readmeMd, 'utf8')
  }

  await Promise.all([
    setupPackageJson(),
    setupReadme()
  ])
}

function renderShields(shields) {
  return shields.map(([title, img, link]) => `[![${title}](https://img.shields.io/${img}.svg?style=flat-square)](${link})`).join(' ')
}

if (require.main === module) {
  run()
}
