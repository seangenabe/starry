Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.includes.svg?style=flat-square)](https://www.npmjs.com/package/starry.includes) [![node](https://img.shields.io/node/v/starry.includes.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function includes<T = any>(
  iterable: Iterable<T>,
  value: T  
  ): boolean
```

Returns whether the value can be found in the iterable. Equality is determined using `SameValueZero`.

Parameters:
* iterable - `Iterable<T>`
* value - `T`

Returns: `boolean`

