import {
  ArrayLike,
  ArrayLikeConstructor,
  arrayTypes
} from 'starry._array-types'
import { setTypes, SetType } from 'starry._set-types'
import { sameValueZero } from 'starry._same-value-zero'
import { some } from 'starry.some'

export function includes<T = any>(iterable: Iterable<T>, value: T): boolean {
  let C = iterable.constructor
  if (arrayTypes.has(C as ArrayLikeConstructor)) {
    let a = (iterable as ArrayLike) as ArrayLikeWithInc
    return a.includes(value)
  }
  if (setTypes.has(C as SetType)) {
    return (iterable as any).has(value)
  }
  return some(iterable, element => sameValueZero(element, value))
}

export default includes

interface ArrayLikeWithInc {
  includes(searchElement: number | any, fromIndex?: number): boolean
}
