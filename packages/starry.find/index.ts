import filter = require('starry.filter')
import first = require('starry.first')

export = function find<T>(
  iterable: Iterable<T>,
  predicate: (T) => boolean
): T | undefined {
  return first(filter(iterable, predicate))
}
