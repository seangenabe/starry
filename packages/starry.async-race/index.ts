import map from 'starry.map'

export default function asyncRace<T, U>(
  iterable: Iterable<T>,
  asyncAction: (T) => PromiseLike<U>
): Promise<U> {

  return Promise.race(map(iterable, asyncAction))
}
