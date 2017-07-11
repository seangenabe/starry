import { EOL } from 'os'

export = function normalizeEOLEOF(str) {
  return `${str.split(/\r?\n/).join(EOL)}${EOL}`
}
