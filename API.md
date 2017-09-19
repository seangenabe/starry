# API

## any

[![npm](https://img.shields.io/npm/v/starry.any.svg?style=flat-square)](https://www.npmjs.com/package/starry.any)

```typescript
function any<T>(iterable: Iterable<T> = []): boolean
```

Returns whether the iterable has any elements (yields anything).

Parameters:
* iterable: `Iterable<T>`

Returns: `boolean`

## asyncAll

[![npm](https://img.shields.io/npm/v/starry.async-all.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-all)

```typescript
function asyncAll<T = any, U = any>(
  iterable: Iterable<T>, 
  asyncAction: (item: T) => PromiseLike<U>
  ): Promise<U[]>
```

Returns a promise that resolves with an array representing the resolved values of the return value of `asyncAction` called upon each element of `iterable`.

Parameters:
* iterable: `Iterable<T>` - An iterable collection
* asyncAction: `(item: T) => PromiseLike<U>` - A thenable called with each item

Returns: `Promise<U[]>`

A handy shortcut for:
```javascript
Promise.all([].map(async function() { ... }))
```

But with iterable support. ☺

## asyncRace

[![npm](https://img.shields.io/npm/v/starry.async-race.svg?style=flat-square)](https://www.npmjs.com/package/starry.async-race)

```typescript
function asyncRace<T = any, U = any>(
  iterable: Iterable<T>, 
  asyncAction: (item: T) => PromiseLike<U>
  )
```

Returns a promise that resolves with the first, of the return values of `asyncAction` called upon each element of `iterable`, which resolved.

Parameters:
* iterable: `Iterable<T>` - An iterable collection
* asyncAction: `(T) => PromiseLike<U>` - A thenable called with each item

Returns: `Promise<U>`

A handy shortcut for:
```javascript
Promise.race([].map(async function() { ... }))
```

But with iterable support. ☺

## bound

[![npm](https://img.shields.io/npm/v/starry.bound.svg?style=flat-square)](https://www.npmjs.com/package/starry.bound)

```typescript
function bound<TObject = any, TArgs = any, TOut = any>(
  fn: (object: TObject, ...args: TArgs[]) => TOut
  ): (this: TObject, ...args: TArgs[]) => TOut
```

Returns a function that calls the input function with the first argument being the output function's context.

Parameters:
* fn: `(object: TObject, ...args: TArgs[]) => TOut`

Returns: `(this: TObject, ...args: TArgs[]) => TOut`

## chunk

[![npm](https://img.shields.io/npm/v/starry.chunk.svg?style=flat-square)](https://www.npmjs.com/package/starry.chunk)

```typescript
function chunk<T = any>(
  iterable: Iterable<T>,
  size: number = 1
  ): Iterable<T[]>
```

Returns an iterable that yields groups of elements as a group of size `size` is received from the iterable `iterable`.

If the iterable ends with an insufficient number of elements required to fill a group, that final group is yielded.

Parameters:
* iterable: `Iterable<T>`
* size: `number`

Returns: `Iterable<T[]>`

## concat

[![npm](https://img.shields.io/npm/v/starry.concat.svg?style=flat-square)](https://www.npmjs.com/package/starry.concat)

```typescript
function concat<T = any>(
  ...iterables: Iterable<T>[]
  ): Iterable<T>
```

Returns an iterable that returns the elements of each iterable passed.

Parameters:
* ...iterables: `Iterable<T>[]`

Returns: `Iterable<T>`

## delimit

[![npm](https://img.shields.io/npm/v/starry.delimit.svg?style=flat-square)](https://www.npmjs.com/package/starry.delimit)

```typescript
function delimit<T = any, U = any>(
  iterable: Iterable<T>,
  delimiter: U
  ): Iterable<T | U>
```

Separates each element in the iterable with a delimiter. Returns a new iterable with the values separated by the delimiter.

Parameters:
* iterable: `Iterable<T>`
* delimiter: `U`

Returns: `Iterable<T | U>`

## every

[![npm](https://img.shields.io/npm/v/starry.every.svg?style=flat-square)](https://www.npmjs.com/package/starry.every)

```typescript
function every<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as T & boolean
  ): boolean
```

Returns whether every element in the iterable satisfies the predicate.

`every` called on an empty iterable is _vacuously_ true.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `boolean`

## filter

[![npm](https://img.shields.io/npm/v/starry.filter.svg?style=flat-square)](https://www.npmjs.com/package/starry.filter)

```typescript
function filter<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as any
  ): Iterable<T>
```

Returns a new iterable that only contains the elements from `iterable` that satisfies `predicate`.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`. Default: `x => x`

Returns: `Iterable<T>`

## find

[![npm](https://img.shields.io/npm/v/starry.find.svg?style=flat-square)](https://www.npmjs.com/package/starry.find)

```typescript
function find<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
  )
```

Returns the first element in the iterable that satisfies the predicate.

Returns `undefined` if no element satisfies the predicate.

Parameters:
* iterable: `Iterable<T>`
* predicate: `(T) => boolean`

Returns: `T | undefined`

## first

[![npm](https://img.shields.io/npm/v/starry.first.svg?style=flat-square)](https://www.npmjs.com/package/starry.first)

```typescript
function first<T = any>(iterable: Iterable<T> = []): T | undefined 
```

Returns the first element of an iterable.

Returns `undefined` if the iterable has no elements.

Parameters:
* iterable: `Iterable<T>`

Returns: `T | undefined`

## flatten

[![npm](https://img.shields.io/npm/v/starry.flatten.svg?style=flat-square)](https://www.npmjs.com/package/starry.flatten)

```typescript
function flatten<T = any>(
  iterable: Iterable<Iterable<T>> = []
  ): Iterable<T>
```

Returns an iterable that iterates through the input flattened a single level.

Parameters: 
  * iterable: `Iterable<Iterable<T>>`

Returns: `Iterable<T>`

## generatorToIterable

[![npm](https://img.shields.io/npm/v/starry.generator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.generator-to-iterable)

```typescript
function generatorToIterable<T = any>(
    generatorFn: () => Iterator<T>
  ): Iterable<T>
```

Wraps a generator function, or any function that returns an iterator, into an iterable such that `#[Symbol.iterator]()` runs the function.

Generator functions, as they turn out, do not save their initial state, and returns an iterator which just saves the generator's state. This function aims to remedy that problem.

Parameters:
* generatorFn: `() => Iterator<T>` - A function that returns an iterator.

Returns: `Iterable<T>`

## groupBy

[![npm](https://img.shields.io/npm/v/starry.group-by.svg?style=flat-square)](https://www.npmjs.com/package/starry.group-by)

```typescript
function groupBy<TItem = any, TKey = any, TValue = any>(
  iterable: Iterable<TItem>,
  keySelector: (item: TItem) => TKey = x => x as TItem & TKey,
  valueSelector: (item: TItem) => Tvalue = x => x as TItem & TValue
): Map<TKey, TValue[]>
```

Groups the elements of an iterable into a map.

Parameters:
* iterable - `Iterable<TItem>`
* keySelector - `(item: TItem) => TKey`: A function to extract the key for each element. Default: `x => x`
* valueSelector - `(item: TItem) => TValue`: A function to map each element into the output grouping. Default: `x => x`

Returns: `Map<TKey, TValue>`

## includes

[![npm](https://img.shields.io/npm/v/starry.includes.svg?style=flat-square)](https://www.npmjs.com/package/starry.includes)

```typescript
function includes<T = any>(
  iterable: Iterable<T>,
  value: T  
  ): boolean
```

Returns whether the value can be found in the iterable. Equality is determined using `SameValueZero`.

Parameters:
* iterable - `Iterable<T>`
* value - `T`

Returns: `boolean`

## intersection

[![npm](https://img.shields.io/npm/v/starry.intersection.svg?style=flat-square)](https://www.npmjs.com/package/starry.intersection)

```typescript
function intersection<T = any>(
    ...iterables: Iterable<T>[]
  ): Iterable<T>
```

Returns the set intersection of the input iterables.

Parameters: 
* ...iterables - `Iterable<T>[]`

Returns: `Iterable<T>`

## iteratorToIterable

[![npm](https://img.shields.io/npm/v/starry.iterator-to-iterable.svg?style=flat-square)](https://www.npmjs.com/package/starry.iterator-to-iterable)

```typescript
function iteratorToIterable<T = any>(
  iterator: Iterator<T>
  ): IterableIterator<T>
```

Iterates through the remaining items of the specified `Iterator` object as though it is an `Iterable` object.

Parameters:
* iterator - `Iterator<T>`

Returns: `IterableIterator<T>`

## last

[![npm](https://img.shields.io/npm/v/starry.last.svg?style=flat-square)](https://www.npmjs.com/package/starry.last)

```typescript
function last<T = any>(iterable: Iterable<T> = []) : T | undefined
```

Returns the last element of iterable.

Returns `undefined` if the iterable has no elements.

Parameters:
* iterable - `Iterable<T>`

Returns: `T | undefined`

## map

[![npm](https://img.shields.io/npm/v/starry.map.svg?style=flat-square)](https://www.npmjs.com/package/starry.map)

```typescript
function map<T = any, U = any>(
  iterable: Iterable<T> = [],
  callback: (element: T, iterable: Iterable<T>) => U = x => x as T & U
  ): Iterable<U>
```

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

```typescript
function reduce<T = any>(
  iterable: Iterable<T>, 
  accumulator: (previousValue: T, currentValue: T) => T
  ): T
function reduce<T = any, U = any>(
  iterable: Iterable<T>,
  accumulator: (previousValue: U, currentValue: T) => U,
  initialValue: U
  ): U
```

Applies an accumulator function over an iterable.

Parameters:
* iterable: `Iterable<T>`
* accumulator: `(previousValue, currentValue)` - An accumulator function over the iterable.
  * previousValue - The accumulate or the initial value.
  * current - The current item of the iterable.
  Must return - The new accumulate.
* initialValue - Optional via argument length. The initial accumulator value.

This works like `Array.prototype.reduce`.

## setEquals

[![npm](https://img.shields.io/npm/v/starry.set-equals.svg?style=flat-square)](https://www.npmjs.com/package/starry.set-equals)

```typescript
function setEquals<TAll = any>(...iterables: Iterable<TAll>[]): boolean
```

Returns whether the given sets hold set equality with each other. If a given input is not an instance of `Set`, it is converted into one.

Parameters:
* iterables - `Array<Iterable<T>>`

Returns: `boolean`

## size

[![npm](https://img.shields.io/npm/v/starry.size.svg?style=flat-square)](https://www.npmjs.com/package/starry.size)

```typescript
function size<T: any>(iterable: Iterable<T>): number
```

Returns the number of elements in the iterable.

Parameters:
* iterable - `Iterable<T>`

Returns: `number`

## skip

[![npm](https://img.shields.io/npm/v/starry.skip.svg?style=flat-square)](https://www.npmjs.com/package/starry.skip)

```typescript
function skip<T: any>(
  iterable: Iterable<T>,
  count: number = 1
  ): Iterable<T>
```

Skips `count` number of elements from the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

## some

[![npm](https://img.shields.io/npm/v/starry.some.svg?style=flat-square)](https://www.npmjs.com/package/starry.some)

```typescript
function some<T = any>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean = x => x as T & boolean
  ): boolean
```

Returns whether any element of `iterable` satisfies `predicate`.

Parameters:
* iterable - `Iterable<T>`
* predicate - `Function<T, Boolean>`. Default: `x => x`

Returns: `Boolean`

## sum

[![npm](https://img.shields.io/npm/v/starry.sum.svg?style=flat-square)](https://www.npmjs.com/package/starry.sum)

```typescript
function sum(
  iterable: Iterable<number>  
  ): number
```

Adds the elements of `iterable`.

Parameters:
* iterable - `Iterable<number>`

Returns: `number`

## take

[![npm](https://img.shields.io/npm/v/starry.take.svg?style=flat-square)](https://www.npmjs.com/package/starry.take)

```typescript
function take<T = any>(
  iterable: Iterable<T>,
  count: number = 1
  ): Iterable<T>
```

Returns `count` number of elements from the beginning of the iterable.

Parameters:
* iterable - `Iterable<T>`
* count - `number`. Default: `1`

Returns: `Iterable<T>`

Throws:
* `TypeError` - when `count` is not a finite number.

## uniq

[![npm](https://img.shields.io/npm/v/starry.uniq.svg?style=flat-square)](https://www.npmjs.com/package/starry.uniq)

```typescript
function uniq<T = any, TKey = any>(
  iterable: Iterable<T> = [],
  keySelector: (item: T) => TKey = x => x as T & TKey
  ): Iterable<T>
```

Returns distinct elements from an iterable.

Parameters: 
* iterable - `Iterable<T>`
* keySelector -  `(item: T) => TKey`: An optional selector with which uniqueness is determined. Default: `x => x`.

Returns: `Iterable<T>`

## zip

[![npm](https://img.shields.io/npm/v/starry.zip.svg?style=flat-square)](https://www.npmjs.com/package/starry.zip)

```typescript
function zip<TAll>(
  ...iterables: Iterable<TAll>[]
  ): Iterable<(TAll | undefined)[]>
```

Returns an iterable that yields grouped elements, the first of which contains the first elements of the input iterables, the second of which contains the second elements of the given iterables, and so on.

If the iterables do not have the same number of elements, elements from shorter iterables are filled with `undefined` when they are exhausted. (Consistent with `lodash.zip`)

Parameters:
* ...iterables: `Iterable<TAll>[]`

Returns: `Iterable<(TAll | undefined)[]>`

