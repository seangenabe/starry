# API

## any

[![npm](https://img.shields.io/npm/v/starry.any.svg?style=flat-square)](https://www.npmjs.com/package/starry.any)

`any(iterable)`

Returns whether the iterable has any elements (yields anything).

Parameters:
* iterable: `Iterable<T>`

Returns: `boolean`

## asyncAll

[![npm](https://img.shields.io/npm/v/starry.async-all.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-all)

`asyncAll(iterable, asyncAction)`

Returns a promise that resolves with an array representing the resolved values of the return value of `asyncAction` called upon each element of `iterable`.

Parameters:
* iterable: `Iterable<T>`
* asyncAction: `(T) => PromiseLike<U>`

Returns: `Promise<U>`

A handy shortcut for:
```javascript
Promise.all([].map(async function() { ... }))
```

But with iterable support. ☺

## asyncRace

[![npm](https://img.shields.io/npm/v/starry.async-race.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-race)

`asyncRace(iterable, asyncAction)`

Returns a promise that resolves with the first, of the return values of `asyncAction` called upon each element of `iterable`, which resolved.

Parameters:
* iterable: `Iterable<T>`
* asyncAction: `(T) => PromiseLike<U>`

Returns: `Promise<U>`

A handy shortcut for:
```javascript
Promise.race([].map(async function() { ... }))
```

But with iterable support. ☺

## bound

[![npm](https://img.shields.io/npm/v/starry.bound.svg?style=flat-square)](https://www.npmjs.com/package/starry.bound)

`bound(fn)`

Returns a function that calls the input function with the first argument being the output function's context.

Parameters:
* fn: `(object: TObject, ...args: TArgs[]) => TOut`

Returns: `(this: TObject, ...args: TArgs[]) => TOut`

## concat

[![npm](https://img.shields.io/npm/v/starry.concat.svg?style=flat-square)](https://www.npmjs.com/package/starry.concat)

`concat(...iterables)`

Returns an iterable that returns the elements of each iterable passed.

Parameters:
* ...iterables: `Iterable<T>[]`

Returns: `Iterable<T>`

## delimit

[![npm](https://img.shields.io/npm/v/starry.delimit.svg?style=flat-square)](https://www.npmjs.com/package/starry.delimit)

`delimit(iterable, delimiter)`

Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.

Parameters:
* iterable: `Iterable<T>`
* delimiter: `U`

Returns: `Iterable<T|U>`

## every

[![npm](https://img.shields.io/npm/v/starry.every.svg?style=flat-square)](https://www.npmjs.com/package/starry.every)

`every(iterable, predicate = x => x)`

Returns whether every element in the iterable satisfies the predicate.

`every` called on an empty iterable is _vacuously_ true.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `boolean`

## filter

[![npm](https://img.shields.io/npm/v/starry.filter.svg?style=flat-square)](https://www.npmjs.com/package/starry.filter)

`filter(iterable, predicate = x => x)`

Returns a new iterable that only contains the elements from `iterable` that satisfies `predicate`.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `Iterable<T>`

## find

[![npm](https://img.shields.io/npm/v/starry.find.svg?style=flat-square)](https://www.npmjs.com/package/starry.find)

`find(iterable, predicate)`

Returns the first element in the iterable that satisfies the predicate.

Returns `undefined` if no element satisfies the predicate.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`

Returns: `T | undefined`

## first

[![npm](https://img.shields.io/npm/v/starry.first.svg?style=flat-square)](https://www.npmjs.com/package/starry.first)

`first(iterable)`

Returns the first element of an iterable.

Returns `undefined` if the iterable has no elements.

Parameters:
* iterable: `Iterable<T>`

Returns: `T | undefined`

## generatorToIterable

[![npm](https://img.shields.io/npm/v/starry.generator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.generator-to-iterable)

`generatorToIterable(generatorFn)`

Wraps a generator function, or any function that returns an iterator, into an iterable such that `#[Symbol.iterator]()` runs the function.

Generator functions, as they turn out, do not save their initial state, and returns an iterator which just saves the generator's state. This function aims to remedy that problem.

Parameters:
* generatorFn: `() => Iterator<T>` - A function that returns an iterator.

Returns: `Iterable<T>`

## includes

[![npm](https://img.shields.io/npm/v/starry.includes.svg?style=flat-square)](https://www.npmjs.com/package/starry.includes)

`includes(iterable, value)`

Returns whether the value can be found in the iterable. Equality is determined using `SameValueZero`.

Parameters:
* iterable - `Iterable<T>`
* value - `T`

Returns: `boolean`

## intersection

[![npm](https://img.shields.io/npm/v/starry.intersection.svg?style=flat-square)](https://www.npmjs.com/package/starry.intersection)

`intersection(...iterables)`

Returns an iterable that only includes the elements that are common in all of the input iterables. Equality is determined using `SameValueZero`.

Parameters:
* ...iterables: `Iterable<T>[]`

Returns: `Iterable<T>`

## iteratorToIterable

[![npm](https://img.shields.io/npm/v/starry.iterator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.iterator-to-iterable)

`iteratorToIterable(iterator)`

Iterates through the remaining items of the specified `Iterator` object as though it is an `Iterable` object.

Parameters:
* iterator - `Iterator<T>`

Returns: `Iterable<T>`

## last

[![npm](https://img.shields.io/npm/v/starry.last.svg?style=flat-square)](https://www.npmjs.com/package/starry.last)

`last(iterable)`

Returns the last element of iterable.

Returns `undefined` if the iterable has no elements.

Parameters:
* iterable - `Iterable<T>`

Returns: `T|undefined`

## map

[![npm](https://img.shields.io/npm/v/starry.map.svg?style=flat-square)](https://www.npmjs.com/package/starry.map)

`map(iterable, callback = x => x)`

Returns a new iterable that is the result of calling `callback` over each element of the input iterable.

Parameters:
* iterable - `Iterable<T>`
* callback(element, iterable) - `(element: T, iterable: Iterable<T>) => U`: A function that can accept two arguments:
  * element - `T`: The element of the current iteration of the iterable.
  * iterable - `Iterable<T>` - The iterable.
  * Returns: `U` - The output object.

Returns: `Iterable<U>`

## reduce

[![npm](https://img.shields.io/npm/v/starry.reduce.svg?style=flat-square)](https://www.npmjs.com/package/starry.reduce)

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

## setEquals

[![npm](https://img.shields.io/npm/v/starry.set-equals.svg?style=flat-square)](https://www.npmjs.com/package/starry.set-equals)

`setEquals(...iterables)`

Returns whether the given sets hold set equality with each other. If a given input is not an instance of `Set`, it is converted into one.

Parameters:
* iterables - `Array<Iterable<T>>`

Returns: `boolean`

## size

[![npm](https://img.shields.io/npm/v/starry.size.svg?style=flat-square)](https://www.npmjs.com/package/starry.size)

`size(iterable)`

Returns the number of elements in the iterable.

Parameters:
* iterable - `Iterable<T>`

Returns: `number`

## skip

[![npm](https://img.shields.io/npm/v/starry.skip.svg?style=flat-square)](https://www.npmjs.com/package/starry.skip)

`skip(iterable, count=1)`

Skips `count` number of elements from the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

## some

[![npm](https://img.shields.io/npm/v/starry.some.svg?style=flat-square)](https://www.npmjs.com/package/starry.some)

`some(iterable, predicate = x => x)`

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`

## sum

[![npm](https://img.shields.io/npm/v/starry.sum.svg?style=flat-square)](https://www.npmjs.com/package/starry.sum)

`sum(iterable)`

Adds the elements of `iterable`.

Parameters:
* iterable - `Iterable<number>`

Returns: `number`

## take

[![npm](https://img.shields.io/npm/v/starry.take.svg?style=flat-square)](https://www.npmjs.com/package/starry.take)

`take(iterable, count = 1)`

Returns `count` number of elements from the beginning of the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

## zip

[![npm](https://img.shields.io/npm/v/starry.zip.svg?style=flat-square)](https://www.npmjs.com/package/starry.zip)

`zip(...iterables)`

Returns an iterable that yields grouped elements, the first of which contains the first elements of the input iterables, the second of which contains the second elements of the given iterables, and so on.

If the iterables do not have the same number of elements, elements from shorter iterables are filled with `undefined` when they are exhausted. (Consistent with `lodash.zip`)

Parameters:
* ...iterables: `Array<Iterable>`

Returns: `Iterable<Array>`

