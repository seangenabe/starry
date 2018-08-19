import { generatorToIterable } from 'starry.generator-to-iterable'

/**
 * Returns an iterable that yields groups of elements
 * as a group of size `size` is received from the iterable `iterable`.
 *
 * If the iterable ends with an insufficient number of elements required
 * to fill a group, that final group is yielded.
 * @param iterable The iterable.
 * @param size The size of each group.
 */
export function chunk<T = any>(
  iterable: Iterable<T>,
  size: number = 1
): Iterable<T[]> {
  if (!Number.isFinite(size)) {
    throw new TypeError('Argument `size` must be a finite number.')
  }
  if (size < 1) {
    throw new Error('Argument `size` must be greater than or equal to 1.')
  }
  return generatorToIterable(function* chunkGenerator() {
    const source: Iterator<T> = iterable[Symbol.iterator]()
    let arr: T[] = []
    let res: IteratorResult<T>
    while (!(res = source.next()).done) {
      arr.push(res.value)
      if (arr.length >= size) {
        yield arr
        arr = []
      }
    }
    if (arr.length) {
      yield arr
    }
  })
}
