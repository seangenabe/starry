```typescript
function delimit<T = any, U = any>(
  iterable: Iterable<T>,
  delimiter: U
  ): Iterable<T | U>
```

Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.

Parameters:
* iterable: `Iterable<T>`
* delimiter: `U`

Returns: `Iterable<T | U>`
