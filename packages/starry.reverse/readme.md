Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.reverse.svg?style=flat-square)](https://www.npmjs.com/package/starry.reverse) [![node](https://img.shields.io/node/v/starry.reverse.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function reverse<T>(
  iterable: Iterable<T>
  ): Iterable<T>
```

Iterates through the elements of an iterable in reverse order.

Unlike `Array.prototype.reverse`, this does not mutate the input argument.

Parameters:
* iterable: `Iterable<T>`

Returns: `Iterable<T>`

