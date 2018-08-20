import { sameValueZero } from 'starry._same-value-zero'
import { some } from 'starry.some'
import isArrayLike = require('lodash.isarraylike')

export function includes<T = any>(iterable: Iterable<T>, value: T): boolean {
  if (iterable instanceof Set || iterable instanceof WeakSet) {
    return (iterable.has as any)(value as any)
  }
  if (isArrayLike(iterable)) {
    return [...iterable].includes(value)
  }

  return some(iterable, element => sameValueZero(element, value))
}

export default includes
