'use strict'

module.exports = function asyncOperation(operation, iterable, asyncAction) {
  if (typeof asyncAction !== 'function') {
    throw new TypeError("asyncAction is not a function")
  }
  return operation((function*() {
    for (let element of iterable) {
      yield asyncAction(element)
    }
  })())
}
