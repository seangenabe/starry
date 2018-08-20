import isArrayLike = require('lodash.isarraylike')
import last = require('lodash.last')

export function last<T = any>(iterable: Iterable<T> = []): T | undefined {
  if (isArrayLike(iterable)) {
    return last(iterable)
  }
  let item
  for (item of iterable) {
    // consume items
  }
  return item
}

export default last
