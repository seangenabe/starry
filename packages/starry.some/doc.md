```typescript
function some<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as any
  ): boolean
```

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`
