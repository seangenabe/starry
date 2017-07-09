`asyncAll(iterable, asyncAction)`

Returns a promise that resolves with an array representing the resolved values of the return value of `asyncAction` called upon each element of `iterable`.

Parameters:
* iterable: `Iterable<T>`
* asyncAction: `(T) => PromiseLike<U>`

Returns: `Promise<U>`

A handy shortcut for:
```javascript
Promise.all([].map(async function() { ... }))
```

But with iterable support. ☺
