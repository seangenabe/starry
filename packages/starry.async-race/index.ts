import map = require('starry.map')

export = function asyncRace<T, U>(
  iterable: Iterable<T>,
  asyncAction: (T) => PromiseLike<U>
): Promise<U> {

  return Promise.race(map(iterable, asyncAction))
}
