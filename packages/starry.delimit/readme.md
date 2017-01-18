Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.delimit.svg?style=flat-square)](https://www.npmjs.com/package/starry.delimit) [![Dependency Status](https://img.shields.io/david/starry.delimit.svg?style=flat-square)](https://david-dm.org/starry.delimit) [![devDependency Status](https://img.shields.io/david/dev/starry.delimit.svg?style=flat-square)](https://david-dm.org/starry.delimit#info=devDependencies) [![node](https://img.shields.io/node/v/starry.delimit.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`delimit(iterable, delimiter)`

Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.

Parameters:
* iterable: `Iterable<T>`
* delimiter: `U`

Returns: `Iterable<T|U>`
