Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry._array-types.svg?style=flat-square)](https://www.npmjs.com/package/starry._array-types) [![node](https://img.shields.io/node/v/starry._array-types.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

```typescript
const arrayTypes: Set<ArrayConstructor | %TypedArrayConstructor%>
```

A set containing all of the array types (`Array`, `%TypedArray%`).

