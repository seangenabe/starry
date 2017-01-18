const arrayTypes = require('starry._array-types')

module.exports = function last(iterable = []) {
  if (arrayTypes.has(iterable.constructor)) {
    let len = iterable.length
    if (len === 0) {
      return undefined
    }
    return iterable[iterable.length - 1]
  }
  let item
  for (item of iterable) {
    // consume items
  }
  return item
}
