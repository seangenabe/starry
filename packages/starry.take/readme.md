Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.take.svg?style=flat-square)](https://www.npmjs.com/package/starry.take) [![node](https://img.shields.io/node/v/starry.take.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function take<T = any>(
  iterable: Iterable<T>,
  count: number = 1
  ): Iterable<T>
```

Returns `count` number of elements from the beginning of the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

