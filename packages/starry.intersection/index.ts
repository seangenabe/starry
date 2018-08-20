import { every } from 'starry.every'
import { filter } from 'starry.filter'
import { generatorToIterable } from 'starry.generator-to-iterable'
import { includes } from 'starry.includes'
import { arrayTypes } from 'starry._array-types'
import { ArrayLikeConstructor } from 'starry._array-types'

export function intersection<T = any>(
  ...iterables: Iterable<T>[]
): Iterable<T> {
  if (!iterables.length) {
    return []
  }
  let first = new Set(iterables.shift() as Iterable<T>)
  iterables = iterables.map(iterable => {
    const C = iterable.constructor
    if (arrayTypes.has(C as ArrayLikeConstructor) || C === Set) {
      return new Set(iterable)
    }
    return iterable
  })
  return generatorToIterable(function* intersectionGenerator() {
    yield* filter(first, element1 => {
      return every(iterables, iterable => {
        return includes(iterable, element1)
      })
    })
  })
}

export default intersection
