import arrayTypes, { ArrayLike, ArrayLikeConstructor } from 'starry._array-types'

export default function size<T>(
  iterable: Iterable<T>
): number {

  let C = iterable.constructor
  if (arrayTypes.has(C as ArrayLikeConstructor)) {
    return (iterable as ArrayLike).length
  }
  if (iterable instanceof Set || iterable instanceof Map) {
    return iterable.size
  }
  let ret = 0
  for (let element of iterable) {
    ret++
  }
  return ret
}
