Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.map.svg?style=flat-square)](https://www.npmjs.com/package/starry.map) [![Dependency Status](https://img.shields.io/david/starry.map.svg?style=flat-square)](https://david-dm.org/starry.map) [![devDependency Status](https://img.shields.io/david/dev/starry.map.svg?style=flat-square)](https://david-dm.org/starry.map#info=devDependencies) [![node](https://img.shields.io/node/v/starry.map.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`map(iterable, callback)`

Returns a new iterable that is the result of calling `callback` over each element of the input iterable.

Parameters:
* iterable - `Iterable<TIn>`
* callback(element, iterable) - `Function<TIn, Iterable<TIn>, TOut>`: A function that can accept two arguments:
  * element - `TIn`: The element of the current iteration of the iterable.
  * iterable - `Iterable<TIn>` - The iterable.
  * Returns: `TOut` - The output object.

Returns: `TOut`


  