Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.every.svg?style=flat-square)](https://www.npmjs.com/package/starry.every) [![node](https://img.shields.io/node/v/starry.every.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function every<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as T & boolean
  ): boolean
```

Returns whether every element in the iterable satisfies the predicate.

`every` called on an empty iterable is _vacuously_ true.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `boolean`

