import filter from 'starry.filter'
import first from 'starry.first'

export default function find<T>(
  iterable: Iterable<T>,
  predicate: (T) => boolean
): T | void {
  return first(filter(iterable, predicate))
}
