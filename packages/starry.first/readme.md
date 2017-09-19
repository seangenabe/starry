Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.first.svg?style=flat-square)](https://www.npmjs.com/package/starry.first) [![node](https://img.shields.io/node/v/starry.first.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function first<T = any>(iterable: Iterable<T> = []): T | undefined 
```

Returns the first element of an iterable.

Returns `undefined` if the iterable has no elements.

Parameters:
* iterable: `Iterable<T>`

Returns: `T | undefined`

