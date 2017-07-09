import generatorToIterable = require('starry.generator-to-iterable')

export = function filter<T>(
  iterable: Iterable<T>,
  predicate: (T) => boolean = x => x
): Iterable<T> {
  if (typeof predicate !== 'function') {
    throw new TypeError("Argument `predicate` is not a function.")
  }
  return generatorToIterable(function* filterGenerator() {
    for (let element of iterable) {
      if (predicate(element)) {
        yield element
      }
    }
  })
}
