import { map } from 'starry.map'

/**
 * Returns whether every element in the iterable satisfies the predicate.
 *
 * `every` called on an empty iterable is _vacuously_ true.
 * @param iterable The iterable to test.
 * @param predicate The predicate to test each item with.
 */
export function every<T = any>(
  iterable: Iterable<T>,
  predicate: ((item: T) => boolean) = x => x as T & boolean
): boolean {
  for (let element of map(iterable, predicate)) {
    if (!element) {
      return false
    }
  }
  return true
}

export default every
