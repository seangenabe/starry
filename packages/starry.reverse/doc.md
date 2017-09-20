```typescript
function reverse<T>(
  iterable: Iterable<T>
  ): Iterable<T>
```

Iterates through the elements of an iterable in reverse order.

Unlike `Array.prototype.reverse`, this does not mutate the input argument.

Parameters:
* iterable: `Iterable<T>`

Returns: `Iterable<T>`
