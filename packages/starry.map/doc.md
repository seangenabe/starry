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
