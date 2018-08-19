/**
 * Wraps a generator function, or any function that returns an iterator,
 * into an iterable such that `#[Symbol.iterator]()` runs the function.
 *
 * Generator functions, as they turn out, do not save their initial state,
 * and returns an iterator which just saves the generator's state.
 * This function aims to remedy that problem.
 *
 * @summary Wraps a generator function into an iterable.
 * @param generatorFn The function.
 */
export function generatorToIterable<T = any>(
  generatorFn: () => Iterator<T>
): Iterable<T> {
  return {
    [Symbol.iterator]() {
      return generatorFn()
    }
  }
}

export default generatorToIterable
