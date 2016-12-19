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
* iterable: `Iterable`

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

## some

`some(iterable, predicate = x => x)`

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`

## take

`take(iterable, count = 1)`

Returns `count` number of elements from the beginning of the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `Number`. Default: `1`

Returns: `Iterable<T>`

