Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry._same-value-zero.svg?style=flat-square)](https://www.npmjs.com/package/starry._same-value-zero) [![node](https://img.shields.io/node/v/starry._same-value-zero.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
function _sameValueZero(x: any, y: any): boolean
```

Reimplements ECMAScript's `SameValueZero` wherein two values equal if they are of the same value or if both of them are zero regardless of sign.

* `-0` and `+0` are equal.
* `NaN` and `NaN` are equal.

Parameters:
* x: `any`
* y: `any`

Returns: `Boolean`

