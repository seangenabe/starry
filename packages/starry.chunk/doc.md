`chunk(iterable, size = 1)`

Returns an iterable that yields groups of elements as a group of size `size` is received from the iterable `iterable`.

If the iterable ends with an insufficient number of elements required to fill a group, that final group is yielded.

Parameters:
* iterable: `Iterable<T>`
* size: `number`

Returns: `Iterable<T[]>`
