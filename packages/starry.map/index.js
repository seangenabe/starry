const generatorToIterable = require('starry.generator-to-iterable')

module.exports = function map(iterable = [], callback = x => x) {
  if (typeof callback !== 'function') {
    throw new TypeError("Argument `callback` is not a function.")
  }
  return generatorToIterable(function* mapGenerator() {
    for (let element of iterable) {
      yield callback(element, iterable)
    }
  })
}
