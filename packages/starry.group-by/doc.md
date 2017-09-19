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
