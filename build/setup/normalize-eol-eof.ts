import { EOL } from 'os'

/**
 * Normalizes line endings of the input string to the current platform EOL and
 * adds an EOL at the end.
 */
export = function normalizeEOLEOF(str: string) {
  return `${str.split(/\r?\n/).join(EOL)}${EOL}`
}
