import generatorToIterable = require('starry.generator-to-iterable')
import arrayTypes = require('starry._array-types')
import { ArrayLikeConstructor, ArrayLike } from 'starry._array-types'

function reverse<T>(
  iterable: Iterable<T>
  ): Iterable<T>

function reverse<T>(
  iterable: Iterable<T> = []
  ): Iterable<T>
{
  return generatorToIterable(function* reverseGenerator() {
    let source: ArrayLike
    if (!arrayTypes.has(iterable.constructor as ArrayLikeConstructor)) {
      source = [...iterable]
    }
    else {
      source = iterable as ArrayLike
    }
    const len = source.length
    for (let i = len - 1; i >= 0; i--) {
      yield source[i]
    }
  })
}

export = reverse
