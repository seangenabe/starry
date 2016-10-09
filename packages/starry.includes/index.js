const arrayTypes = require('starry._array-types')
const setTypes = require('starry._set-types')
const sameValueZero = require('starry._same-value-zero')
const some = require('starry.some')

module.exports = function includes(iterable = [], value) {
  let C = iterable.constructor
  if (arrayTypes.has(C)) {
    return iterable.includes(value)
  }
  if (setTypes.has(C)) {
    return iterable.has(value)
  }
  return some(iterable, element => sameValueZero(element, value))
}
