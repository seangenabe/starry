# starry

Modular functions for iterable objects

[![Build Status](https://img.shields.io/travis/seangenabe/starry/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/starry.svg?style=flat-square)](https://david-dm.org/seangenabe/starry#info=devDependencies)

## Usage

[![npm](https://img.shields.io/npm/v/starry.svg?style=flat-square)](https://www.npmjs.com/package/starry)

Just export the function you want:

```javascript
const every = require('starry').every
```

Or just get the functions you want as [separate modules](https://www.npmjs.com/browse/keyword/starry-modularized).

### asyncAll(iterable, asyncAction)

[![npm](https://img.shields.io/npm/v/starry.asyncAll.svg?style=flat-square)](https://www.npmjs.com/package/starry.asyncAll)

Calls the function `asyncAction` asynchronously for each element in parallel. See `Promise.all`.

* `iterable`: `Iterable`: The iterable to process.
* `asyncAction`: `Function`: The function to call for each element. Called with the following argument:
  * `element`: The element in the current iteration.

Returns:
* `Promise`

### asyncRace(iterable, asyncAction)

[![npm](https://img.shields.io/npm/v/starry.asyncRace.svg?style=flat-square)](https://www.npmjs.com/package/starry.asyncRace)

Calls the function `asyncAction` asynchronously for each element, and resolves with the first action that resolves. See `Promise.race`.

* `iterable`: `Iterable`: The iterable to process.
* `asyncAction`: `Function`: The function to call for each element. Called with the following argument:
  * `element`: The element in the current iteration.

### every(iterable, predicate)

[![npm](https://img.shields.io/npm/v/starry.every.svg?style=flat-square)](https://www.npmjs.com/package/starry.every)

Determines whether all elements in an iterable satisfy a condition.

* `iterable`: `Iterable`: The iterable to process.
* `predicate`: `Function`: The predicate to test with, called with the following argument:
  * `element`: The element in the current iteration.

Returns:
* `Boolean`

### filter(iterable, predicate = Boolean)

[![npm](https://img.shields.io/npm/v/starry.filter.svg?style=flat-square)](https://www.npmjs.com/package/starry.filter)

Filters an iterable based on a predicate.

* `iterable`: `Iterable`: The iterable to filter.
* `predicate`: `Function`: The predicate to test with. Defaults to the `Boolean` constructor function, which will return `true` for truthy values. Called with the following argument:
  * `element`: The element in the current iteration.

Returns:
* `Generator`

### size(iterable)

[![npm](https://img.shields.io/npm/v/starry.size.svg?style=flat-square)](https://www.npmjs.com/package/starry.size)

Counts the number of elements in an iterable.

* `iterable`: `Iterable`: The iterable to process.

Returns:
* `Number`

## Why call it `starry`?

Generator functions -> star -> starry

## Why make another iterable library?

I want a modular one, a la _lodash_.

## License

MIT
