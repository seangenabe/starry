Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.generator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.generator-to-iterable) [![Dependency Status](https://img.shields.io/david/starry.generator-to-iterable.svg?style=flat-square)](https://david-dm.org/starry.generator-to-iterable) [![devDependency Status](https://img.shields.io/david/dev/starry.generator-to-iterable.svg?style=flat-square)](https://david-dm.org/starry.generator-to-iterable#info=devDependencies) [![node](https://img.shields.io/node/v/starry.generator-to-iterable.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`iteratorFnToIterable(generatorFn)`

Wraps a generator function, or any function that returns an iterator, into an iterable such that `#[Symbol.iterator]()` runs the function.

Generator functions, as they turn out, do not save their initial state, and returns an iterator which just saves the generator's state. This function aims to remedy that problem.

Parameters:
* generatorFn: `Function<Iterator<T>>` - A function that returns an iterator.

Returns: `Iterable<T>`

