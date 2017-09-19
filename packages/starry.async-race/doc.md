```typescript
function asyncRace<T = any, U = any>(
  iterable: Iterable<T>, 
  asyncAction: (item: T) => PromiseLike<U>
  )
```

Returns a promise that resolves with the first, of the return values of `asyncAction` called upon each element of `iterable`, which resolved.

Parameters:
* iterable: `Iterable<T>` - An iterable collection
* asyncAction: `(T) => PromiseLike<U>` - A thenable called with each item

Returns: `Promise<U>`

A handy shortcut for:
```javascript
Promise.race([].map(async function() { ... }))
```

But with iterable support. ☺
