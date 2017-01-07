module.exports = function map(iterable = [], callback = x => x) {
  if (typeof callback !== 'function') {
    throw new TypeError("Argument `callback` is not a function.")
  }
  return (function* mapGenerator() {
    for (let element of iterable) {
      yield callback(element, iterable)
    }
  })()
}
