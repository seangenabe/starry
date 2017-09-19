```typescript
function uniq<T = any, TKey = any>(
  iterable: Iterable<T> = [],
  keySelector: (item: T) => TKey = x => x as T & TKey
  ): Iterable<T>
```

Returns distinct elements from an iterable.

Parameters: 
* iterable - `Iterable<T>`
* keySelector -  `(item: T) => TKey`: An optional selector with which uniqueness is determined. Default: `x => x`.

Returns: `Iterable<T>`
