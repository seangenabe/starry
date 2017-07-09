import map from 'starry.map'

export default function asyncAll<T, U>(
  iterable: Iterable<T>,
  asyncAction: (T) => PromiseLike<U>
): Promise<U[]> {

  return Promise.all(map(iterable, asyncAction))
}
