Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.intersection.svg?style=flat-square)](https://www.npmjs.com/package/starry.intersection) [![node](https://img.shields.io/node/v/starry.intersection.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function intersection<T = any>(
    ...iterables: Iterable<T>[]
  ): Iterable<T>
```

Returns the set intersection of the input iterables.

Parameters: 
* ...iterables - `Iterable<T>[]`

Returns: `Iterable<T>`

