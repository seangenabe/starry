# API

## any

`any(iterable)`

Returns whether the iterable has any elements (yields anything).

Parameters:
* iterable: `Iterable`

Returns: `Boolean`

## asyncAll

`asyncAll(iterable, asyncAction)`

Returns a promise that resolves with an array representing the resolved values of the return value of `asyncAction` called upon each element of `iterable`.

Parameters:
* iterable: `Iterable<TIn: any>`
* asyncAction: `Function<TIn, TOut: Promise | any>`

Returns: `Promise<TOut>`

A handy shortcut for:
```javascript
Promise.all([].map(async function() { ... }))
```

But with iterable support. ☺

## asyncRace

`asyncRace(iterable, asyncAction)`

Returns a promise that resolves with the first, of the return values of `asyncAction` called upon each element of `iterable`, which resolved.

Parameters:
* iterable: `Iterable<TIn>`
* asyncAction: `Function<TIn, Promise<TOut> | TOut>`

Returns: `Promise<TOut>`

A handy shortcut for:
```javascript
Promise.race([].map(async function() { ... }))
```

But with iterable support. ☺

Shameless plug: Use with [delayer](https://www.npmjs.com/package/delayer) for timed promises!

## bound

`bound(fn)`

Returns a function that calls the input function with the first argument being the output function's context.

Parameters:
* fn: `Function`

Returns: `Function`

## concat

`concat(...iterables)`

Returns an iterable that returns the elements of each iterable passed.

Parameters:
* ...iterables: `Array<Iterable<T>>`

Returns: `Iterable<T>`

## delimit

`delimit(iterable, delimiter)`

Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.

Parameters:
* iterable: `Iterable<T>`
* delimiter: `U`

Returns: `Iterable<T|U>`

## every

`every(iterable, predicate = x => x)`

Returns whether every element in the iterable satisfies the predicate.

`every` called on an empty iterable is _vacuously_ true.

Parameters:
* iterable: `Iterable<T>`
* predicate: `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`

## filter

`filter(iterable, predicate = x => x)`

Returns a new iterable that only contains the elements from `iterable` that satisfies `predicate`.

Parameters:
* iterable: `Iterable<T>`
* predicate: `Function<T, Boolean>`

Returns: `Iterable<T>`

## find

`find(iterable, predicate)`

Returns the first element in the iterable that satisfies the predicate.

Parameters:
* iterable: `Iterable<T>`
* predicate: `Function<T, Boolean>`

Returns: `T`

## first

`first(iterable)`

Returns the first element of an iterable.

Parameters:
* iterable: `Iterable<T>`

Returns: `T`

## generatorToIterable

`iteratorFnToIterable(generatorFn)`

Wraps a generator function, or any function that returns an iterator, into an iterable such that `#[Symbol.iterator]()` runs the function.

Generator functions, as they turn out, do not save their initial state, and returns an iterator which just saves the generator's state. This function aims to remedy that problem.

Parameters:
* generatorFn: `Function<Iterator<T>>` - A function that returns an iterator.

Returns: `Iterable<T>`

## includes

`includes(iterable, value)`

Returns whether the value can be found in the iterable. Equality is determined using `SameValueZero`.

Parameters:
* iterable - `Iterable<T>`
* value - `T`

Returns: `Boolean`

## intersection

`intersection(...iterables)`

Returns an iterable that only includes the elements that are common in all of the input iterables. Equality is determined using `SameValueZero`.

Parameters:
* ...iterables: `Array<Iterable<T>>`

Returns: `Iterable<T>`

## iteratorToIterable

`iteratorToIterable(iterator)`

Iterates through the remaining items of the specified `Iterator` object as though it is an `Iterable` object.

Parameters:
* iterator - `Iterator<T>`

Returns: `Iterable<T>`

## last

`last(iterable)`

Returns the last element of iterable.

Parameters:
* iterable - `Iterable<T>`

Returns: `T`

## map

`map(iterable, callback)`

Returns a new iterable that is the result of calling `callback` over each element of the input iterable.

Parameters:
* iterable - `Iterable<TIn>`
* callback(element, iterable) - `Function<TIn, Iterable<TIn>, TOut>`: A function that can accept two arguments:
  * element - `TIn`: The element of the current iteration of the iterable.
  * iterable - `Iterable<TIn>` - The iterable.
  * Returns: `TOut` - The output object.

Returns: `TOut`

## reduce

`reduce(iterable, accumulator, initialValue)`

Applies an accumulator function over an iterable.

Parameters:
* iterable: `Iterable<TIn>`
* accumulator: `Function<TOut|TIn, TIn, TOut|Tin>` - An accumulator function over the iterable.
  * previous: `TOut|TIn` - The accumulate or the initial value.
  * current: `TIn` - The current item of the iterable.
  Must return: `TOut|TIn` - The new accumulate.
* initialValue: `TOut` - Optional via argument length. The initial accumulator value.

Returns: `TOut|Tin`

## setEquals

`setEquals(...iterables)`

Returns whether the given sets hold set equality with each other. If a given input is not an instance of `Set`, it is converted into one.

Parameters:
* iterables - `Array<Iterable<T>>`

Returns: `boolean`

## size

`size(iterable)`

Returns the number of elements in the iterable.

Parameters:
* iterable - `Iterable`

Returns: `Number`

## skip

`skip(iterable, count=1)`

Skips `count` number of elements from the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `Number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

## some

`some(iterable, predicate = x => x)`

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`

## sum

`sum(iterable)`

Adds the elements of `iterable`.

Parameters:
* iterable - `Iterable<Number>`

Returns: `Number`

## take

`take(iterable, count = 1)`

Returns `count` number of elements from the beginning of the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `Number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

## zip

`zip(...iterables)`

Returns an iterable that yields grouped elements, the first of which contains the first elements of the input iterables, the second of which contains the second elements of the given iterables, and so on.

If the iterables do not have the same number of elements, elements from shorter iterables are filled with `undefined` when they are exhausted. (Consistent with `lodash.zip`)

Parameters:
* ...iterables: `Array<Iterable>`

Returns: `Iterable<Array>`

