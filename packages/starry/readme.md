# starry

Modular functions for iterable objects

[![npm](https://img.shields.io/npm/v/starry.svg?style=flat-square)](https://www.npmjs.com/package/starry)

## Usage

Just export the function you want:

```javascript
const every = require('starry').every
```

Also available in [separate modules](https://www.npmjs.com/browse/keyword/starry-modularized).

### count(iterable)

Counts the number of elements in an iterable.

Arguments:
* `iterable`: `Iterable`: The iterable to process.

Returns:
* `Number`

### every(iterable, predicate)

Determines whether all elements in an iterable satisfy a condition.

Arguments:
* `iterable`: `Iterable`: The iterable to process.
* `predicate`: `Function`: The predicate to test with, called with the following argument:
  * `element`: The element in the current iteration.

Returns:
* `Boolean`

### filter(iterable, predicate = Boolean)

Filters an iterable based on a predicate.

Arguments:
* `iterable`: `Iterable`: The iterable to filter.
* `predicate`: `Function`: The predicate to test with. Defaults to the `Boolean` constructor function, which will return `true` for truthy values. Called with the following argument:
  * `element`: The element in the current iteration.

Returns:
* `Generator`

### asyncAll(iterable, asyncAction)

Calls the function `asyncAction` asynchronously for each element in parallel. See `Promise.all`.

Arguments:
* `iterable`: `Iterable`: The iterable to process.
* `asyncAction`: `Function`: The function to call for each element. Called with the following argument:
  * `element`: The element in the current iteration.

Returns:
* `Promise`

## Why call it `starry`?

Generator functions -> star -> starry

## Why make another iterable library?

I want a modular one, a la _lodash_.

## License

MIT
