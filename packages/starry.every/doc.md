```typescript
function every<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as T & boolean
  ): boolean
```

Returns whether every element in the iterable satisfies the predicate.

`every` called on an empty iterable is _vacuously_ true.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `boolean`
