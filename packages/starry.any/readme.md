Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.any.svg?style=flat-square)](https://www.npmjs.com/package/starry.any) [![node](https://img.shields.io/node/v/starry.any.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function any<T>(iterable: Iterable<T> = []): boolean
```

Returns whether the iterable has any elements (yields anything).

Parameters:
* iterable: `Iterable<T>`

Returns: `boolean`

