Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.reduce.svg?style=flat-square)](https://www.npmjs.com/package/starry.reduce) [![Dependency Status](https://img.shields.io/david/starry.reduce.svg?style=flat-square)](https://david-dm.org/starry.reduce) [![devDependency Status](https://img.shields.io/david/dev/starry.reduce.svg?style=flat-square)](https://david-dm.org/starry.reduce#info=devDependencies) [![node](https://img.shields.io/node/v/starry.reduce.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`reduce(iterable, accumulator, initialValue)`

Applies an accumulator function over an iterable.

Parameters:
* iterable: `Iterable<T>`
* accumulator: `(previousValue, currentValue)` - An accumulator function over the iterable.
  * previousValue - The accumulate or the initial value.
  * current - The current item of the iterable.
  Must return - The new accumulate.
* initialValue - Optional via argument length. The initial accumulator value.

Specific types are intentionally omitted to avoid confusion. Basically this works like `Array.prototype.reduce`.

