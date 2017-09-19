Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.flatten.svg?style=flat-square)](https://www.npmjs.com/package/starry.flatten) [![node](https://img.shields.io/node/v/starry.flatten.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function flatten<T = any>(
  iterable: Iterable<Iterable<T>> = []
  ): Iterable<T>
```

Returns an iterable that iterates through the input flattened a single level.

Parameters: 
  * iterable: `Iterable<Iterable<T>>`

Returns: `Iterable<T>`

