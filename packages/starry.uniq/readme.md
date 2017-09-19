Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.uniq.svg?style=flat-square)](https://www.npmjs.com/package/starry.uniq) [![node](https://img.shields.io/node/v/starry.uniq.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function uniq<T = any, TKey = any>(
  iterable: Iterable<T> = [],
  keySelector: (item: T) => TKey = x => x as T & TKey
  ): Iterable<T>
```

Returns distinct elements from an iterable.

Parameters: 
* iterable - `Iterable<T>`
* keySelector -  `(item: T) => TKey`: An optional selector with which uniqueness is determined. Default: `x => x`.

Returns: `Iterable<T>`

