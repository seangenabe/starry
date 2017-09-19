import map = require('starry.map')

function every<T = any>(
  iterable: Iterable<T>,
  predicate: ((item: T) => boolean) = x => x as any
): boolean {

  for (let element of map(iterable, predicate)) {
    if (!element) {
      return false
    }
  }
  return true
}

export = every
