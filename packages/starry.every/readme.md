Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.every.svg?style=flat-square)](https://www.npmjs.com/package/starry.every) [![Dependency Status](https://img.shields.io/david/starry.every.svg?style=flat-square)](https://david-dm.org/starry.every) [![devDependency Status](https://img.shields.io/david/dev/starry.every.svg?style=flat-square)](https://david-dm.org/starry.every#info=devDependencies) [![node](https://img.shields.io/node/v/starry.every.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`every(iterable, predicate = x => x)`

Returns whether every element in the iterable satisfies the predicate.

`every` called on an empty iterable is _vacuously_ true.

Parameters:
* iterable: `Iterable<T>`
* predicate: `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`


  