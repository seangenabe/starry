Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.bound.svg?style=flat-square)](https://www.npmjs.com/package/starry.bound) [![node](https://img.shields.io/node/v/starry.bound.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function bound<TObject = any, TArgs = any, TOut = any>(
  fn: (object: TObject, ...args: TArgs[]) => TOut
  ): (this: TObject, ...args: TArgs[]) => TOut
```

Returns a function that calls the input function with the first argument being the output function's context.

Parameters:
* fn: `(object: TObject, ...args: TArgs[]) => TOut`

Returns: `(this: TObject, ...args: TArgs[]) => TOut`

