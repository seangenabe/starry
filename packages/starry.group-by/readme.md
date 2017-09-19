Member of the starry suite—modular functions for iterable objects.

[![npm](https://img.shields.io/npm/v/starry.group-by.svg?style=flat-square)](https://www.npmjs.com/package/starry.group-by) [![node](https://img.shields.io/node/v/starry.group-by.svg?style=flat-square)](https://nodejs.org/en/download/)

## Status

Applies to the whole suite.

[![Build Status](https://img.shields.io/travis/seangenabe/starry.svg?style=flat-square)](https://travis-ci.org/seangenabe/starry) [![Coverage Status](https://img.shields.io/coveralls/seangenabe/starry.svg?style=flat-square)](https://coveralls.io/github/seangenabe/starry)

## Usage

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

