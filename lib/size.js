'use strict'

module.exports = function size(iterable) {
  if (iterable == null) {
    throw new TypeError("iterable is not defined")
  }
  let size = 0
  for (let element of iterable) {
    size++
  }
  return size
}
