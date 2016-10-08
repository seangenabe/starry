Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.async-race.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-race) [![Dependency Status](https://img.shields.io/david/starry.async-race.svg?style=flat-square)](https://david-dm.org/starry.async-race) [![devDependency Status](https://img.shields.io/david/dev/starry.async-race.svg?style=flat-square)](https://david-dm.org/starry.async-race#info=devDependencies) [![node](https://img.shields.io/node/v/starry.async-race.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

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

