import generatorToIterable = require('starry.generator-to-iterable')

function uniq<T = any>(
  iterable: Iterable<T>
  ): Iterable<T>

function uniq<T = any, TKey = any>(
  iterable: Iterable<T>,
  keySelector: (item: T) => TKey
  ): Iterable<T>

function uniq<T = any, TKey = any>(
  iterable: Iterable<T> = [],
  keySelector: (item: T) => TKey = x => x as T & TKey
  ): Iterable<T>
{
  return generatorToIterable(function* uniqGenerator() {
    const seen = new Set<TKey>()
    for (const item of iterable) {
      const key = keySelector(item)
      if (seen.has(key)) {
        continue
      }
      else {
        seen.add(key)
        yield item
      }
    }
  })
}

export = uniq
