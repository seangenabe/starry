Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.find.svg?style=flat-square)](https://www.npmjs.com/package/starry.find) [![node](https://img.shields.io/node/v/starry.find.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`find(iterable, predicate)`

Returns the first element in the iterable that satisfies the predicate.

Returns `undefined` if no element satisfies the predicate.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`

Returns: `T | undefined`

