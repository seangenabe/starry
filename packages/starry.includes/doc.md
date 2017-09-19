```typescript
function includes<T = any>(
  iterable: Iterable<T>,
  value: T  
  ): boolean
```

Returns whether the value can be found in the iterable. Equality is determined using `SameValueZero`.

Parameters:
* iterable - `Iterable<T>`
* value - `T`

Returns: `boolean`
