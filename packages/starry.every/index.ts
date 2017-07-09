import map from 'starry.map'

export default function every<T>(
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
