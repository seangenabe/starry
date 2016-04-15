const arrayTypes = require('./_array-types')
const setTypes = require('./_set-types')
const sameValueZero = require('./_same-value-zero')
const includes = require('lodash.includes')

module.exports = function* intersection(...iterables) {
  if (!iterables.length) { return }
  let first = iterables.shift()
  for (let item of first) {
    let intersects = true
    for (let iterable of iterables) {
      if (arrayTypes.has(iterable.constructor)) {
        // can't use (Array/TypedArray).prototype.includes yet
        if (!includes(iterable, item)) { 
          intersects = false
          break
        }
      }
      else if (setTypes.has(iterable.constructor)) {
        if (!iterable.has(item)) {
          intersects = false
          break
        }
      }
      else {
        let has = false
        for (let iterableItem of iterable) {
          if (sameValueZero(item, iterableItem)) {
            has = true
            break
          }
        }
        if (!has) {
          intersects = true
          break
        }
      }
    }
    if (intersects) {
      yield item
    }
  }
}
