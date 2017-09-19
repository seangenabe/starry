```typescript
function setEquals<TAll = any>(...iterables: Iterable<TAll>[]): boolean
```

Returns whether the given sets hold set equality with each other. If a given input is not an instance of `Set`, it is converted into one.

Parameters:
* iterables - `Array<Iterable<T>>`

Returns: `boolean`
