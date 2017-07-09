import arrayTypes, { ArrayLike, ArrayLikeConstructor } from 'starry._array-types'
import setTypes, { SetType } from 'starry._set-types'
import sameValueZero from 'starry._same-value-zero'
import some from 'starry.some'

export default function includes<T>(
  iterable: Iterable<T> = [],
  value: T
): boolean {
  let C = iterable.constructor
  if (arrayTypes.has(C as ArrayLikeConstructor)) {
    return (iterable as ArrayLike).includes(value)
  }
  if (setTypes.has(C as SetType)) {
    return (iterable as any).has(value)
  }
  return some(iterable, element => sameValueZero(element, value))
}
