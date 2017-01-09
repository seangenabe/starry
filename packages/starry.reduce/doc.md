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
