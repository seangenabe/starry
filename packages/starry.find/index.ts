import { filter } from 'starry.filter'
import { first } from 'starry.first'

export function find<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): T | undefined {
  return first(filter(iterable, predicate))
}

export default find
