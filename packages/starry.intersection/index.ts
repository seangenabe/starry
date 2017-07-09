import every = require('starry.every')
import filter = require('starry.filter')
import generatorToIterable = require('starry.generator-to-iterable')
import includes = require('starry.includes')

function intersection<T>(
  ...iterables: Iterable<T>[]
): Iterable<T> {

  if (!iterables.length) {
    return []
  }
  let first = iterables.shift() as Iterable<T>
  return generatorToIterable(function* intersectionGenerator() {
    yield* filter(first, element1 => {
      return every(iterables, iterable => {
        return includes(iterable, element1)
      })
    })
  })
}

export = intersection
