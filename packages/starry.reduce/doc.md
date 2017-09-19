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
