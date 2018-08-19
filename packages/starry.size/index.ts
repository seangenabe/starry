import { arrayTypes } from 'starry._array-types'
import { ArrayLike, ArrayLikeConstructor } from 'starry._array-types'

function size<T = any>(iterable: Iterable<T>): number

function size<T, K, V>(
  iterable: Iterable<T> | Map<K, V> | string = []
): number {
  let C = iterable.constructor as ArrayLikeConstructor
  if (arrayTypes.has(C)) {
    return (iterable as ArrayLike).length
  }
  if (iterable.constructor === Set || iterable.constructor === Map) {
    return (iterable as Map<K, V> | Set<T>).size
  }

  if (typeof iterable === 'string') {
    return iterable.length
  }

  let ret = 0
  for (let element of iterable) {
    ret++
  }
  return ret
}
export = size
