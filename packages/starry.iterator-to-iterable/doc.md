```typescript
function iteratorToIterable<T = any>(
  iterator: Iterator<T>
  ): IterableIterator<T>
```

Iterates through the remaining items of the specified `Iterator` object as though it is an `Iterable` object.

Parameters:
* iterator - `Iterator<T>`

Returns: `IterableIterator<T>`
