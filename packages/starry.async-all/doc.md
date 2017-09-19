```typescript
function asyncAll<T = any, U = any>(
  iterable: Iterable<T>, 
  asyncAction: (item: T) => PromiseLike<U>
  ): Promise<U[]>
```

Returns a promise that resolves with an array representing the resolved values of the return value of `asyncAction` called upon each element of `iterable`.

Parameters:
* iterable: `Iterable<T>` - An iterable collection
* asyncAction: `(item: T) => PromiseLike<U>` - A thenable called with each item

Returns: `Promise<U[]>`

A handy shortcut for:
```javascript
Promise.all([].map(async function() { ... }))
```

But with iterable support. ☺
