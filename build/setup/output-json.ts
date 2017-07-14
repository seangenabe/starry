import normalizeEOLEOF = require('./normalize-eol-eof')
import sortPackageJson = require('sort-package-json')

/**
 * Stringify + Normalize EOL.
 */
export = function outputJSON(obj: object): string {
  return normalizeEOLEOF(JSON.stringify(sortPackageJson(obj), null, 2))
}
