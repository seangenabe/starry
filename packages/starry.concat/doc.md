```typescript
function concat<T = any>(
  ...iterables: Iterable<T>[]
  ): Iterable<T>
```

Returns an iterable that returns the elements of each iterable passed.

Parameters:
* ...iterables: `Iterable<T>[]`

Returns: `Iterable<T>`
