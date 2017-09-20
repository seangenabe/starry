
function groupBy<TItem = any, TKey = any>(
  iterable: Iterable<TItem>,
  keySelector?: (item: TItem) => TKey
): Map<TKey, TItem[]>

function groupBy<TItem = any, TKey = any, TValue = any>(
  iterable: Iterable<TItem>,
  keySelector?: (item: TItem) => TKey,
  valueSelector?: (item: TItem) => TValue
): Map<TKey, TValue[]>

function groupBy<TItem = any, TKey = any, TValue = any>(
  iterable: Iterable<TItem>,
  keySelector: (item: TItem) => TKey = x => x as TItem & TKey,
  valueSelector: (item: TItem) => TValue = x => x as TItem & TValue
): Map<TKey, TValue[]> {
  const map = new Map<TKey, TValue[]>()
  for (const item of iterable) {
    const key = keySelector(item)
    if (map.has(key)) {
      (map.get(key) as TValue[]).push(valueSelector(item))
    }
    else {
      map.set(key, [valueSelector(item)])
    }
  }
  return map
}

export = groupBy
