import { map } from 'starry.map'

export = function asyncRace<T = any, U = any>(
  iterable: Iterable<T>,
  asyncAction: (item: T) => PromiseLike<U>
): Promise<U> {
  return Promise.race(map(iterable, asyncAction))
}
