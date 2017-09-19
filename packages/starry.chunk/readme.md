Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.chunk.svg?style=flat-square)](https://www.npmjs.com/package/starry.chunk) [![node](https://img.shields.io/node/v/starry.chunk.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function chunk<T = any>(
  iterable: Iterable<T>,
  size: number = 1
  ): Iterable<T[]>
```

Returns an iterable that yields groups of elements as a group of size `size` is received from the iterable `iterable`.

If the iterable ends with an insufficient number of elements required to fill a group, that final group is yielded.

Parameters:
* iterable: `Iterable<T>`
* size: `number`

Returns: `Iterable<T[]>`

