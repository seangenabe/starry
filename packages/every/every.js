'use strict'

module.exports = function every(iterable, predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError("callback is not a function")
  }
  for (let element of iterable) {
    if (!predicate(element))) {
      return false
    }
  }
  return true
}
