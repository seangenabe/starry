import { generatorToIterable } from 'starry.generator-to-iterable'

export function zip<T1>(iterable: Iterable<T1>): Iterable<[T1]>
export function zip<T1, T2>(
  i1: Iterable<T1>,
  i2: Iterable<T2>
): Iterable<[T1 | undefined, T2 | undefined]>
export function zip<T1, T2, T3>(
  i1: Iterable<T1>,
  i2: Iterable<T2>,
  i3: Iterable<T3>
): Iterable<[T1 | undefined, T2 | undefined, T3 | undefined]>
export function zip<TAll>(
  ...iterables: Iterable<TAll>[]
): Iterable<(TAll | undefined)[]>

export function zip<T>(
  ...iterables: Iterable<T>[]
): Iterable<(T | undefined)[]> {
  const iterators = iterables.map(c => c[Symbol.iterator]())
  const iteratorEnded = iterators.map(() => false)

  return generatorToIterable(function* zipGenerator() {
    do {
      let allDone = true
      const result = iterators.map((iterator, i) => {
        if (iteratorEnded[i]) {
          return { done: true, value: undefined }
        }
        const { done, value } = iterator.next()
        if (done) {
          iteratorEnded[i] = true
        } else {
          allDone = false
        }
        return { done, value }
      })
      if (allDone) {
        break
      }
      yield result.map(r => r.value)
    } while (true)
  })
}
export default zip
