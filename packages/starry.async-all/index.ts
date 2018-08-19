import { map } from 'starry.map'

export = function asyncAll<T = any, U = any>(
  iterable: Iterable<T>,
  asyncAction: (item: T) => PromiseLike<U>
): Promise<U[]> {
  return Promise.all(map(iterable, asyncAction))
}
