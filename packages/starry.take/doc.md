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
