import arrayTypes = require('starry._array-types')
import { ArrayLike, ArrayLikeConstructor } from 'starry._array-types'
import setTypes = require('starry._set-types')
import { SetType } from 'starry._set-types'
import sameValueZero = require('starry._same-value-zero')
import some = require('starry.some')

export = function includes<T>(
  iterable: Iterable<T>,
  value: T
): boolean {
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

interface ArrayLikeWithInc {
  includes(searchElement: number | any, fromIndex?: number): boolean
}
