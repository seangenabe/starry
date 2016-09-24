`asyncRace(iterable, asyncAction)`

Returns a promise that resolves with the first, of the return values of `asyncAction` called upon each element of `iterable`, which resolved.

Parameters:
* iterable: `Iterable<TIn>`
* asyncAction: `Function<TIn, Promise<TOut> | TOut>`

Returns: `Promise<TOut>`

A handy shortcut for:
```javascript
Promise.race([].map(async function() { ... }))
```

But with iterable support. ☺

Shameless plug: Use with [delayer](https://www.npmjs.com/package/delayer) for timed promises!
