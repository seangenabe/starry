Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.some.svg?style=flat-square)](https://www.npmjs.com/package/starry.some) [![Dependency Status](https://img.shields.io/david/starry.some.svg?style=flat-square)](https://david-dm.org/starry.some) [![devDependency Status](https://img.shields.io/david/dev/starry.some.svg?style=flat-square)](https://david-dm.org/starry.some#info=devDependencies) [![node](https://img.shields.io/node/v/starry.some.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`some(iterable, predicate = x => x)`

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`


  