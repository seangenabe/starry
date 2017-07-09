Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.take.svg?style=flat-square)](https://www.npmjs.com/package/starry.take) [![Dependency Status](https://img.shields.io/david/starry.take.svg?style=flat-square)](https://david-dm.org/starry.take) [![devDependency Status](https://img.shields.io/david/dev/starry.take.svg?style=flat-square)](https://david-dm.org/starry.take#info=devDependencies) [![node](https://img.shields.io/node/v/starry.take.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`take(iterable, count = 1)`

Returns `count` number of elements from the beginning of the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

