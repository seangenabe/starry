'use strict'

const asyncAll = require('../lib/async-all')
const ChildProcess = require('child_process')
const globby = require('globby')
const Path = require('path')

async function run() {
  try {
    let paths = await globby('*.js', { cwd: 'lib' })
    await asyncAll(paths, async path => {
      let moduleName = Path.basename(path, '.js')
      let moduleDir = `npm/${moduleName}`
      await new Promise((resolve, reject) => {
        let cp = ChildProcess.exec(
          `cd ${moduleDir} && npm ls`,
          function(err, stdout, stderr) {

          resolve()
        })
        cp.stdout.pipe(process.stdout)
        cp.stderr.pipe(process.stderr)
      })
    })
  }
  catch (err) {
    console.error(err.stack)
    process.exit(1)
  }
}

run()
