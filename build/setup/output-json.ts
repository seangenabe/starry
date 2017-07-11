import normalizeEOLEOF = require('./normalize-eol-eof')
import sortPackageJson = require('sort-package-json')

export = function outputJSON(obj) {
  return normalizeEOLEOF(JSON.stringify(sortPackageJson(obj), null, 2))
}
