import map = require('starry.map')

export = function some<T>(
  iterable: Iterable<T>,
  predicate: (T) => boolean = x => x as boolean
): boolean {

  for (let element of map(iterable, predicate)) {
    if (element) {
      return true
    }
  }
  return false
}
