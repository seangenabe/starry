import { generatorToIterable } from 'starry.generator-to-iterable'
import { iteratorToIterable } from 'starry.iterator-to-iterable'
import { take } from 'starry.take'
import isArrayLike = require('lodash.isarraylike')

export function skip<T = any>(
  iterable: Iterable<T>,
  count?: number
): Iterable<T>
export function skip<T = any>(arrayLike: ArrayLike<T>, count?: number): T[]

export function skip<T = any>(
  iterable: Iterable<T> | ArrayLike<T>,
  count: number = 1
): Iterable<T> | ArrayLike<T> {
  if (!Number.isFinite(count)) {
    throw new Error('Argument `count` must be finite.')
  }

  if (count <= 0) {
    return iterable
  }

  if (Array.isArray(iterable)) {
    return iterable.slice(count)
  }

  if (isArrayLike(iterable)) {
    return Array.from(iterable).slice(count)
  }

  return generatorToIterable(function* skipGenerator() {
    let iterator = iterable[Symbol.iterator]()
    let iterableWrap = iteratorToIterable(iterator)

    for (let _ of take(iterableWrap, count)) {
      // consume values
    }

    yield* iterableWrap
  })
}

export default skip
