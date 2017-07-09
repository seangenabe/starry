Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.set-equals.svg?style=flat-square)](https://www.npmjs.com/package/starry.set-equals) [![Dependency Status](https://img.shields.io/david/starry.set-equals.svg?style=flat-square)](https://david-dm.org/starry.set-equals) [![devDependency Status](https://img.shields.io/david/dev/starry.set-equals.svg?style=flat-square)](https://david-dm.org/starry.set-equals#info=devDependencies) [![node](https://img.shields.io/node/v/starry.set-equals.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`setEquals(...iterables)`

Returns whether the given sets hold set equality with each other. If a given input is not an instance of `Set`, it is converted into one.

Parameters:
* iterables - `Array<Iterable<T>>`

Returns: `boolean`

