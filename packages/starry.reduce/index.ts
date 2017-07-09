import iteratorToIterable from 'starry.iterator-to-iterable'

export default function reduce<T>(
  iterable: Iterable<T>,
  accumulator: (previousValue: T, currentValue: T) => T
): T;

export default function reduce<T, U>(
  iterable: Iterable<T>,
  accumulator: (previousValue: U, currentValue: T) => U,
  initialValue: U
): U;

export default function reduce<T, U>(
  iterable: Iterable<T>,
  accumulator: (previousValue: T | U, currentValue: T) => U,
  ...a: U[]
): T | U {

  if (typeof accumulator !== 'function') {
    throw new TypeError("Argument `accumulator` is not a function.")
  }

  let currentValue: T | U
  let iterator: Iterator<T> = iterable[Symbol.iterator]()
  let iterableWrap = iteratorToIterable(iterator)
  if (a.length) {
    [currentValue] = a
  }
  else {
    let hasAny = false
    for (let element of iterableWrap) {
      currentValue = element
      hasAny = true
      break
    }
    if (!hasAny) {
      throw new TypeError("Reduce of empty iterable with no initial value.")
    }
  }

  for (let element of iterableWrap) {
    currentValue = accumulator(currentValue, element)
  }

  return currentValue
}
