import generatorToIterable from 'starry.generator-to-iterable'

export default function concat<T>(
  ...iterables: Iterable<T>[]
): Iterable<T> {

  return generatorToIterable(function* concatGenerator() {
    for (let iterable of iterables) {
      yield* iterable
    }
  })
}
