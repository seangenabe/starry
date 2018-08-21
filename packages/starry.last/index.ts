import isArrayLike = require('lodash.isarraylike')
import _last = require('lodash.last')

export function last<T = any>(
  iterable?: Iterable<T> | ArrayLike<T>
): T | undefined

export function last<T = any>(
  iterable: Iterable<T> | ArrayLike<T> = []
): T | undefined {
  if (isArrayLike(iterable)) {
    return _last(iterable)
  }
  let item
  for (item of iterable) {
    // consume items
  }
  return item
}

export default last
