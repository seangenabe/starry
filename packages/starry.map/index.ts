import { generatorToIterable } from 'starry.generator-to-iterable'

/**
 * Returns a new iterable that is the result of calling `callback` over each element of the input iterable.
 * @param iterable The source iterable.
 * @param callback The callback to map the iterable with.
 */
export function map<T = any, U = any>(
  iterable: Iterable<T> = [],
  callback: (element: T, iterable: Iterable<T>) => U = x => x as T & U
): Iterable<U> {
  if (typeof callback !== 'function') {
    throw new TypeError('Argument `callback` is not a function.')
  }
  return generatorToIterable(function* mapGenerator() {
    for (let element of iterable) {
      yield callback(element, iterable)
    }
  })
}

export default map
