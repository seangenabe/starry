export default function generatorToIterable<T>(
  generatorFn: () => Iterator<T>
): Iterable<T> {

  return {
    [Symbol.iterator]() {
      return generatorFn()
    }
  }
}
