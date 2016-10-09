module.exports = function* map(iterable, callback) {
  if (typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError("Argument `iterable` is not iterable.")
  }
  if (typeof callback !== 'function') {
    throw new TypeError("Argument `callback` is not a function.")
  }
  for (let element of iterable) {
    yield callback(element, iterable)
  }
}
