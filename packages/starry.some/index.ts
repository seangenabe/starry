import { map } from 'starry.map'

/**
 * Returns whether any element of `iterable` satisfies `predicate`.
 * @param iterable The iterable to test.
 * @param predicate A predicate to test each item with.
 */
export function some<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as T & boolean
): boolean {
  for (let element of map(iterable, predicate)) {
    if (element) {
      return true
    }
  }
  return false
}

export default some
