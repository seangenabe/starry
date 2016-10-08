Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.async-all.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-all) [![Dependency Status](https://img.shields.io/david/starry.async-all.svg?style=flat-square)](https://david-dm.org/starry.async-all) [![devDependency Status](https://img.shields.io/david/dev/starry.async-all.svg?style=flat-square)](https://david-dm.org/starry.async-all#info=devDependencies) [![node](https://img.shields.io/node/v/starry.async-all.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`asyncAll(iterable, asyncAction)`

Returns a promise that resolves with an array representing the resolved values of the return value of `asyncAction` called upon each element of `iterable`.

Parameters:
* iterable: `Iterable<TIn: any>`
* asyncAction: `Function<TIn, TOut: Promise | any>`

Returns: `Promise<TOut>`

A handy shortcut for:
```javascript
Promise.all([].map(async function() { ... }))
```

But with iterable support. ☺


  