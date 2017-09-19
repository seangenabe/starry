import generatorToIterable = require('starry.generator-to-iterable')

export = function concat<T = any>(
  ...iterables: Iterable<T>[]
): Iterable<T> {

  return generatorToIterable(function* concatGenerator() {
    for (let iterable of iterables) {
      yield* iterable
    }
  })
}
