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
