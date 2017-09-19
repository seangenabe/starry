```typescript
function flatten<T = any>(
  iterable: Iterable<Iterable<T>> = []
  ): Iterable<T>
```

Returns an iterable that iterates through the input flattened a single level.

Parameters: 
  * iterable: `Iterable<Iterable<T>>`

Returns: `Iterable<T>`
