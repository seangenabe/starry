'use strict'

module.exports = function* filter(iterable, predicate) {
  if (predicate == null) {
    predicate = Boolean
  }
  if (typeof predicate !== 'function') {
    throw new TypeError("predicate is not a function")
  }
  for (let element of iterable) {
    if (predicate(element)) {
      yield element
    }
  }
}
