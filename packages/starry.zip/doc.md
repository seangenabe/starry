```typescript
function zip<TAll>(
  ...iterables: Iterable<TAll>[]
  ): Iterable<(TAll | undefined)[]>
```

Returns an iterable that yields grouped elements, the first of which contains the first elements of the input iterables, the second of which contains the second elements of the given iterables, and so on.

If the iterables do not have the same number of elements, elements from shorter iterables are filled with `undefined` when they are exhausted. (Consistent with `lodash.zip`)

Parameters:
* ...iterables: `Iterable<TAll>[]`

Returns: `Iterable<(TAll | undefined)[]>`
