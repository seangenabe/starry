import { generatorToIterable } from 'starry.generator-to-iterable'

export function filter<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as any
): Iterable<T> {
  if (typeof predicate !== 'function') {
    throw new TypeError('Argument `predicate` is not a function.')
  }
  return generatorToIterable(function* filterGenerator() {
    for (let element of iterable) {
      if (predicate(element)) {
        yield element
      }
    }
  })
}

export default filter
