import map from 'starry.map'

export default function some<T>(
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
