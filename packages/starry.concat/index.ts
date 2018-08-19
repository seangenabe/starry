import { generatorToIterable } from 'starry.generator-to-iterable'

/**
 * Returns an iterable that returns the elements of each iterable passed.
 * @param iterables The iterables.
 */
export function concat<T = any>(...iterables: Iterable<T>[]): Iterable<T> {
  return generatorToIterable(function* concatGenerator() {
    for (let iterable of iterables) {
      yield* iterable
    }
  })
}
