```typescript
function generatorToIterable<T = any>(
    generatorFn: () => Iterator<T>
  ): Iterable<T>
```

Wraps a generator function, or any function that returns an iterator, into an iterable such that `#[Symbol.iterator]()` runs the function.

Generator functions, as they turn out, do not save their initial state, and returns an iterator which just saves the generator's state. This function aims to remedy that problem.

Parameters:
* generatorFn: `() => Iterator<T>` - A function that returns an iterator.

Returns: `Iterable<T>`
