export = function generatorToIterable<T = any>(
  generatorFn: () => Iterator<T>
): Iterable<T> {

  return {
    [Symbol.iterator]() {
      return generatorFn()
    }
  }
}
