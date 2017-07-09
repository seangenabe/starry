import arrayTypes = require('starry._array-types')
import { ArrayLike, ArrayLikeConstructor } from 'starry._array-types'

function size<T>(iterable: Iterable<T>): number
function size<T, K, V>(
  iterable: Iterable<T> | Map<K, V>
): number {

  let C = iterable.constructor
  if (arrayTypes.has(C as ArrayLikeConstructor)) {
    return (iterable as ArrayLike).length
  }
  if (iterable.constructor === Set || iterable.constructor === Map) {
    return (iterable as Map<K, V> | Set<T>).size
  }
  let ret = 0
  for (let element of iterable) {
    ret++
  }
  return ret
}
export = size
