import map = require('starry.map')

export = function some<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as any
): boolean {

  for (let element of map(iterable, predicate)) {
    if (element) {
      return true
    }
  }
  return false
}
