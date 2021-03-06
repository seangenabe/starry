Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.zip.svg?style=flat-square)](https://www.npmjs.com/package/starry.zip) [![node](https://img.shields.io/node/v/starry.zip.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function zip<TAll>(
  ...iterables: Iterable<TAll>[]
  ): Iterable<(TAll | undefined)[]>
```

Returns an iterable that yields grouped elements, the first of which contains the first elements of the input iterables, the second of which contains the second elements of the given iterables, and so on.

If the iterables do not have the same number of elements, elements from shorter iterables are filled with `undefined` when they are exhausted. (Consistent with `lodash.zip`)

Parameters:
* ...iterables: `Iterable<TAll>[]`

Returns: `Iterable<(TAll | undefined)[]>`

