import { generatorToIterable } from 'starry.generator-to-iterable'

export function flatten<T = any>(
  iterable: Iterable<Iterable<T>> = []
): Iterable<T> {
  return generatorToIterable(function* flattenGenerator() {
    for (const inner of iterable) {
      yield* inner
    }
  })
}

export default flatten
