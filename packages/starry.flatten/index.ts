import generatorToIterable = require('starry.generator-to-iterable')

export = function flatten<T = any>(
  iterable: Iterable<Iterable<T>> = []
  ): Iterable<T>
{
  return generatorToIterable(function* flattenGenerator() {
    for (const inner of iterable) {
      yield* inner
    }
  })
}
