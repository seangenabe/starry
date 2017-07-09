Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.zip.svg?style=flat-square)](https://www.npmjs.com/package/starry.zip) [![Dependency Status](https://img.shields.io/david/starry.zip.svg?style=flat-square)](https://david-dm.org/starry.zip) [![devDependency Status](https://img.shields.io/david/dev/starry.zip.svg?style=flat-square)](https://david-dm.org/starry.zip#info=devDependencies) [![node](https://img.shields.io/node/v/starry.zip.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`zip(...iterables)`

Returns an iterable that yields grouped elements, the first of which contains the first elements of the input iterables, the second of which contains the second elements of the given iterables, and so on.

If the iterables do not have the same number of elements, elements from shorter iterables are filled with `undefined` when they are exhausted. (Consistent with `lodash.zip`)

Parameters:
* ...iterables: `Array<Iterable>`

Returns: `Iterable<Array>`

