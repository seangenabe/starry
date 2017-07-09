import arrayTypes from 'starry._array-types'
import generatorToIterable from 'starry.generator-to-iterable'
import iteratorToIterable from 'starry.iterator-to-iterable'
import take from 'starry.take'

export default function skip<T>(
  iterable: Iterable<T>,
  count: number = 1
): Iterable<T> {

  if (!Number.isFinite(count)) {
    throw new Error("Argument `count` must be finite.")
  }
  if (count <= 0) {
    return iterable
  }
  if (iterable instanceof Array) {
    return iterable.slice(count)
  }

  return generatorToIterable(function* skipGenerator() {
    let iterator = iterable[Symbol.iterator]()
    let iterableWrap = iteratorToIterable(iterator)

    for (let skippedValue of take(iterableWrap, count)) {
      // consume values
    }

    yield* iterableWrap
  })
}
