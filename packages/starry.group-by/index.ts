/**
 * Groups the elements of an iterable into a map.
 * @param iterable The iterable.
 * @param keySelector A function to determine the key to assign to each item.
 * @param valueSelector A function to map each item into the output value.
 */
export function groupBy<TItem = any, TKey = any, TValue = any>(
  iterable: Iterable<TItem>,
  keySelector: (item: TItem) => TKey = x => x as TItem & TKey,
  valueSelector: (item: TItem) => TValue = x => x as TItem & TValue
): Map<TKey, TValue[]> {
  const map = new Map<TKey, TValue[]>()
  for (const item of iterable) {
    const key = keySelector(item)
    if (map.has(key)) {
      ;(map.get(key) as TValue[]).push(valueSelector(item))
    } else {
      map.set(key, [valueSelector(item)])
    }
  }
  return map
}

export default groupBy
