Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.iterator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.iterator-to-iterable) [![Dependency Status](https://img.shields.io/david/starry.iterator-to-iterable.svg?style=flat-square)](https://david-dm.org/starry.iterator-to-iterable) [![devDependency Status](https://img.shields.io/david/dev/starry.iterator-to-iterable.svg?style=flat-square)](https://david-dm.org/starry.iterator-to-iterable#info=devDependencies) [![node](https://img.shields.io/node/v/starry.iterator-to-iterable.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`iteratorToIterable(iterator)`

Iterates through the remaining items of the specified `Iterator` object as though it is an `Iterable` object.

Parameters:
* iterator - `Iterator<T>`

Returns: `Iterable<T>`

