Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.generator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.generator-to-iterable) [![node](https://img.shields.io/node/v/starry.generator-to-iterable.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function generatorToIterable<T = any>(
    generatorFn: () => Iterator<T>
  ): Iterable<T>
```

Wraps a generator function, or any function that returns an iterator, into an iterable such that `#[Symbol.iterator]()` runs the function.

Generator functions, as they turn out, do not save their initial state, and returns an iterator which just saves the generator's state. This function aims to remedy that problem.

Parameters:
* generatorFn: `() => Iterator<T>` - A function that returns an iterator.

Returns: `Iterable<T>`

