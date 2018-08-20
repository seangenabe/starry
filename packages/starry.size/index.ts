import isArrayLike = require('lodash.isarraylike')
import _size = require('lodash.size')

export function size(iterable: Iterable<any>): number {
  if (iterable == null) {
    return 0
  }
  if (isArrayLike(iterable) || typeof iterable === 'string') {
    return _size(iterable)
  }
  if (iterable instanceof Set || iterable instanceof Map) {
    return iterable.size
  }

  let ret = 0
  for (let _ of iterable) {
    ret++
  }
  return ret
}

export default size
