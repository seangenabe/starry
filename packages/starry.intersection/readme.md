Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.intersection.svg?style=flat-square)](https://www.npmjs.com/package/starry.intersection) [![Dependency Status](https://img.shields.io/david/starry.intersection.svg?style=flat-square)](https://david-dm.org/starry.intersection) [![devDependency Status](https://img.shields.io/david/dev/starry.intersection.svg?style=flat-square)](https://david-dm.org/starry.intersection#info=devDependencies) [![node](https://img.shields.io/node/v/starry.intersection.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

`intersection(...iterables)`

Returns an iterable that only includes the elements that are common in all of the input iterables. Equality is determined using `SameValueZero`.

Parameters:
* ...iterables: `Array<Iterable<T>>`

Returns: `Iterable<T>`


  