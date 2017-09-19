Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.some.svg?style=flat-square)](https://www.npmjs.com/package/starry.some) [![node](https://img.shields.io/node/v/starry.some.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function some<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as T & boolean
  ): boolean
```

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`

