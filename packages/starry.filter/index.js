module.exports = function* filter(iterable = [], predicate = x => x) {
  if (typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError("Argument `iterable` is not iterable.")
  }
  if (typeof predicate !== 'function') {
    throw new TypeError("Argument `predicate` is not a function.")
  }
  for (let element of iterable) {
    if (predicate(element)) {
      yield element
    }
  }
}
