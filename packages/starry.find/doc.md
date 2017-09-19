```typescript
function find<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
  )
```

Returns the first element in the iterable that satisfies the predicate.

Returns `undefined` if no element satisfies the predicate.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`

Returns: `T | undefined`
