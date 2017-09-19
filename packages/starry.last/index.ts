import arrayTypes = require('starry._array-types')
import { ArrayLikeConstructor, ArrayLike } from 'starry._array-types'

function last<T = any>(
  iterable: Iterable<T> = []
): T | undefined {

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

export = last
