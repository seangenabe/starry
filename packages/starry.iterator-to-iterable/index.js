module.exports = function iteratorToIterable(iterator) {
  if (iterator == null || typeof iterator.next !== 'function') {
    throw new TypeError("Argument `iterator` is not an iterator.")
  }
  return {
    [Symbol.iterator]() {
      return iterator
    },
    next() {
      return iterator.next()
    }
  }
}
