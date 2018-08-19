import { generatorToIterable } from 'starry.generator-to-iterable'

export function reverse<T>(iterable: Iterable<T>): Iterable<T>

export function reverse<T>(iterable: Iterable<T> = []): Iterable<T> {
  return generatorToIterable(function* reverseGenerator() {
    const source = [...iterable]
    const len = source.length
    for (let i = len - 1; i >= 0; i--) {
      yield source[i]
    }
  })
}

export default reverse
