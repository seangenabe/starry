module.exports = function* map(iterable, callback, thisArg) {
  if (typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError("`iterable` is not iterable.")
  }
  if (typeof callback !== 'function') {
    throw new TypeError("`callback` is not a function.")
  }
  for (let element of iterable) {
    yield callback.call(thisArg, element, iterable)
  }
}
