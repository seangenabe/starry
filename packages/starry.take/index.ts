import arrayTypes = require('starry._array-types')
import generatorToIterable = require('starry.generator-to-iterable')

export = function take<T>(
  iterable: Iterable<T>,
  count: number = 1
): Iterable<T> {

  if (!Number.isFinite(count)) {
    throw new TypeError("Argument `count` is not a finite number.")
  }

  if (count <= 0) {
    return []
  }

  if (iterable instanceof Array) {
    return iterable.slice(0, count)
  }

  return generatorToIterable(function* takeGenerator() {
    let iterator = iterable[Symbol.iterator]()
    while (count > 0) {
      let iteration = iterator.next()
      if (iteration.done) {
        return
      }
      yield iteration.value
      count--
    }
  })
}