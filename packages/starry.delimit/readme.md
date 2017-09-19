Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.delimit.svg?style=flat-square)](https://www.npmjs.com/package/starry.delimit) [![node](https://img.shields.io/node/v/starry.delimit.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function delimit<T = any, U = any>(
  iterable: Iterable<T>,
  delimiter: U
  ): Iterable<T | U>
```

Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.

Parameters:
* iterable: `Iterable<T>`
* delimiter: `U`

Returns: `Iterable<T | U>`

