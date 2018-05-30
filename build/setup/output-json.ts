import sortPackageJson = require('sort-package-json')
import normalizeEOLEOF from './normalize-eol-eof';

/**
 * Stringify + Normalize EOL.
 */
export default function outputJSON(obj: object): string {
  return normalizeEOLEOF(JSON.stringify(sortPackageJson(obj), null, 2))
}
