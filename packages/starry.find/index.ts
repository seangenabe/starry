import filter = require('starry.filter')
import first = require('starry.first')

export = function find<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): T | undefined {
  return first(filter(iterable, predicate))
}
