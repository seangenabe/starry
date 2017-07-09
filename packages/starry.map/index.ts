import generatorToIterable from 'starry.generator-to-iterable'

export default function map<T, U>(
  iterable: Iterable<T> = [],
  callback: ((element: T, iterable: Iterable<T>) => U) = x => x as T & U
): Iterable<U> {

  if (typeof callback !== 'function') {
    throw new TypeError("Argument `callback` is not a function.")
  }
  return generatorToIterable(function* mapGenerator() {
    for (let element of iterable) {
      yield callback(element, iterable)
    }
  })
}
