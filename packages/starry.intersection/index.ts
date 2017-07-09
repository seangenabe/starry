import every from 'starry.every'
import filter from 'starry.filter'
import generatorToIterable from 'starry.generator-to-iterable'
import includes from 'starry.includes'

export default function intersection<T>(
  ...iterables: Iterable<T>[]
): Iterable<T> {

  if (!iterables.length) {
    return []
  }
  let first = iterables.shift()
  return generatorToIterable(function* intersectionGenerator() {
    yield* filter(first, element1 => {
      return every(iterables, iterable => {
        return includes(iterable, element1)
      })
    })
  })
}
