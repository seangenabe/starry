import map = require('starry.map')

export = function every<T>(
  iterable: Iterable<T>,
  predicate: (T) => boolean = x => x
): boolean {

  for (let element of map(iterable, predicate)) {
    if (!element) {
      return false
    }
  }
  return true
}
