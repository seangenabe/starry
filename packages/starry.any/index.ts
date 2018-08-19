/**
 * Returns whether the iterable has any elements (yields anything).
 * @param iterable The iterable to test.
 */
export function any<T>(iterable: Iterable<T> = []): boolean {
  for (let _ of iterable) {
    return true
  }
  return false
}

export default any
