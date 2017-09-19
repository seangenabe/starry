Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.async-all.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-all) [![node](https://img.shields.io/node/v/starry.async-all.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

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

