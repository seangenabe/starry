```typescript
function filter<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as any
  ): Iterable<T>
```

Returns a new iterable that only contains the elements from `iterable` that satisfies `predicate`.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `Iterable<T>`
