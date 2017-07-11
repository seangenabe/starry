Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.filter.svg?style=flat-square)](https://www.npmjs.com/package/starry.filter) [![node](https://img.shields.io/node/v/starry.filter.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`filter(iterable, predicate = x => x)`

Returns a new iterable that only contains the elements from `iterable` that satisfies `predicate`.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `Iterable<T>`

