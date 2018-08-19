import { generatorToIterable } from 'starry.generator-to-iterable'

/**
 * Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.
 * @param iterable The iterable.
 * @param delimiter The delimiter.
 */
export function delimit<T = any, U = any>(
  iterable: Iterable<T>,
  delimiter: U
): Iterable<T | U> {
  return generatorToIterable(function* delimitGenerator() {
    let firstRead = false
    for (let element of iterable) {
      if (!firstRead) {
        firstRead = true
      } else {
        yield delimiter
      }
      yield element
    }
  })
}
export default delimit
