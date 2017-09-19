Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.async-race.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-race) [![node](https://img.shields.io/node/v/starry.async-race.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

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

