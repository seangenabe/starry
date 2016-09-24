const arrayTypes = require('starry._array-types')

module.exports = function size(iterable) {
  if (iterable == null) {
    throw new TypeError("`iterable` is not defined")
  }
  let C = iterable.constructor
  if (arrayTypes.has(C)) {
    return iterable.length
  }
  if (iterable instanceof Set || iterable instanceof Map) {
    return iterable.size
  }
  let ret = 0
  for (let element of iterable) {
    ret++
  }
  return ret
}