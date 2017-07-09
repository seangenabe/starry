export default function iteratorToIterable<T>(
    iterator: Iterator<T>
  ): IterableIterator<T> {

  if (iterator == null || typeof iterator.next !== 'function') {
    throw new TypeError("Argument `iterator` is not an iterator.")
  }
  let obj: IterableIterator<T> = {
    [Symbol.iterator]() {
      return obj
    },
    next() {
      return iterator.next()
    }
  }
  return obj
}
