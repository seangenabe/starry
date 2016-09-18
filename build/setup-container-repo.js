const FS = require('fs')
const camelCase = require('lodash.camelcase')
const containerpkg = require.resolve('./packages/starry/package')

let packages = FS.readdirSync('package')
  .filter(x => x !== 'starry')

for (let pkgName of packages) {
  let key = pkgName.replace(/^starry\./, '')
  if (key.startsWith('_')) {
    continue
  }
  let ccKey = camelCase(key)

}
