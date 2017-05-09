# starry

[![Greenkeeper badge](https://badges.greenkeeper.io/seangenabe/starry.svg)](https://greenkeeper.io/)

Modular functions for iterable objects

[![npm](https://img.shields.io/npm/v/starry.svg?style=flat-square)](https://www.npmjs.com/package/starry)
[![Build Status](https://img.shields.io/travis/seangenabe/starry/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry)
[![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/starry.svg?style=flat-square)](https://david-dm.org/seangenabe/starry#info=devDependencies)

## Intro

This is a combination of some methods inspired from `lodash` as well as some utilities for asynchronous tasks, but tailored for JS iterables in general.

(An [iterable][es2015-iterables] is any object that has a `Symbol.iterator` function property.)

[es2015-iterables]: http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface

## Usage

Either export the function you want:

```javascript
const every = require('starry').every
```

Or get the functions you want as [separate modules](https://www.npmjs.com/browse/keyword/starry-modularized):

```javascript
const every = require('starry.every')
```

### API

See the [API](API.md).

## Why call it `starry`?

Generator functions -> star -> starry

## Why make another iterable library?

I want a modular one, a la _lodash_.

## License

MIT
