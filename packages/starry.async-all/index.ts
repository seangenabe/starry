import map = require('starry.map')

export = function asyncAll<T, U>(
  iterable: Iterable<T>,
  asyncAction: (T) => PromiseLike<U>
): Promise<U[]> {

  return Promise.all(map(iterable, asyncAction))
}
