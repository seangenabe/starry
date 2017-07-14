import every = require('starry.every')
import filter = require('starry.filter')
import generatorToIterable = require('starry.generator-to-iterable')
import includes = require('starry.includes')
import arrayTypes = require('starry._array-types')
import { ArrayLikeConstructor } from 'starry._array-types'

function intersection<T>(
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

export = intersection
