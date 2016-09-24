`map(iterable, callback)`

Returns a new iterable that is the result of calling `callback` over each element of the input iterable.

Parameters:
* iterable - `Iterable<TIn>`
* callback(element, iterable) - `Function<TIn, Iterable<TIn>, TOut>`: A function that can accept two arguments:
  * element - `TIn`: The element of the current iteration of the iterable.
  * iterable - `Iterable<TIn>` - The iterable.
  * Returns: `TOut` - The output object.

Returns: `TOut`
