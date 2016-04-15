'use strict'

const mkdirp = require('mkdirp-promise')
const globby = require('globby')
const Path = require('path')
const pify = require('pify')
const FS = pify(require('fs'))
const rootPkg = require('../package')
const src = 'dist'
const dest = 'npm'
const asyncAll = require(`../${src}/async-all`)

async function run() {
  try {
    let paths = await globby('*.js', { cwd: src })
    await asyncAll(paths, async path => {
      let moduleName = Path.basename(path, '.js')
      let realpath = `${src}/${path}`
      let moduleDir = `${dest}/${moduleName}`
      await mkdirp(moduleDir)
      // Get JS file.
      let contentsjs = await FS.readFile(realpath, 'utf8')
      // Replace local requires with modular requires.
      let localDeps = []
      let thirdPartyDeps = []
      contentsjs = contentsjs.replace(
        /(require\(['"])(\.\/)?([^'"]*)(['"]\))/g,
        (match, s1, s2, s3, s4) => {
          if (s2 && s2.length) {
            localDeps.push(s3)
            return `${s1}starry.${s3}${s4}`
          }
          else {
            thirdPartyDeps.push(s3)
            return `${s1}${s3}${s4}`
          }
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
        main: path
      }
      let keywords = moduleName === 'starry' ? [] : ['starry-modularized']
      keywords = keywords.concat(rootPkg.keywords)
      pkg.keywords = keywords
      if (localDeps.length) {
        pkg.dependencies = {}
        for (let d of localDeps) {
          pkg.dependencies[`starry.${d}`] = rootPkg.version
        }
      }
      if (thirdPartyDeps.length) {
        pkg.dependencies = pkg.dependencies || {}
        for (let d of thirdPartyDeps) {
          let version = rootPkg.dependencies[d] || 'latest'
          pkg.dependencies[d] = version
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
