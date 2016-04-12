'use strict'

const mkdirp = require('mkdirp-promise')
const globby = require('globby')
const asyncAll = require('../lib/async-all')
const Path = require('path')
const pify = require('pify')
const FS = pify(require('fs'))
const rootPkg = require('../package')

async function run() {
  try {
    let paths = await globby('*.js', { cwd: 'lib' })
    await asyncAll(paths, async path => {
      let moduleName = Path.basename(path, '.js')
      let realpath = `lib/${path}`
      let moduleDir = `npm/${moduleName}`
      await mkdirp(moduleDir)
      // Get JS file.
      let contentsjs = await FS.readFile(realpath, 'utf8')
      // Replace local requires with modular requires.
      let deps = []
      contentsjs = contentsjs.replace(
        /(require\(['"])(\.\/)([^'"]*)(['"]\))/g,
        (match, s1, s2, s3, s4) => {
          deps.push(s3)
          return `${s1}starry.${s3}${s4}`
        }
      )
      await FS.writeFile(`${moduleDir}/${path}`, contentsjs, 'utf8')
      // Generate package.json
      let isMain = moduleName === 'starry'
      let pkg = {
        name: isMain ? 'starry' : `starry.${moduleName}`,
        version: rootPkg.version,
        description: isMain
          ? 'Modular functions for iterable objects.'
          : `Member of the starry suite—modular functions for iterable objects.`,
        homepage: rootPkg.homepage,
        author: rootPkg.author,
        repository: rootPkg.repository,
        license: rootPkg.license,
        engines: rootPkg.engines,
        main: path,
        keywords: ['starry-modularized'].concat(rootPkg.keywords)
      }
      if (deps.length) {
        pkg.dependencies = {}
        for (let d of deps) {
          pkg.dependencies[`starry.${d}`] = rootPkg.version
        }
      }
      await FS.writeFile(
        `${moduleDir}/package.json`,
        JSON.stringify(pkg, undefined, 2),
        'utf8'
      )
      // Generate readme.md
      let readme
      if (isMain) {
        readme = await FS.readFile(`${__dirname}/../readme.md`, 'utf8')
      }
      else {
        readme = `See the [homepage](${rootPkg.homepage}) for usage instructions.`
      }
      await FS.writeFile(`${moduleDir}/readme.md`, readme, 'utf8')
    })
  }
  catch (err) {
    console.error(err.stack)
    process.exit(1)
  }
}

run()
