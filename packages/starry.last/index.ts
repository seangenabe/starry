import arrayTypes, { ArrayLikeConstructor, ArrayLike } from 'starry._array-types'

export default function last<T>(
  iterable: Iterable<T>
): T | void {

  if (arrayTypes.has(iterable.constructor as ArrayLikeConstructor)) {
    let len = (iterable as ArrayLike).length
    if (len === 0) {
      return undefined
    }
    return iterable[len - 1]
  }
  let item
  for (item of iterable) {
    // consume items
  }
  return item
}
