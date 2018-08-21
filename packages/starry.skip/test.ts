import { skip } from '.'
import test from 'ava'

let s = 'abc'
const skipArr = <T>(i: Iterable<T>, c?: number) => [...skip(i, c)]

test('empty', t => t.deepEqual(skipArr([]), []))
test('skip 0 values', t => t.deepEqual(skipArr(s, 0), ['a', 'b', 'c']))
test('skip without count arg', t => t.deepEqual(skipArr(s), ['b', 'c']))
test('skip some values', t => t.deepEqual(skipArr(s, 2), ['c']))
test('skip more than length', t => t.deepEqual(skipArr(s, 30), []))
test('array slice', t => t.deepEqual(skipArr(['a', 'b', 'c'], 2), ['c']))
test('typed array', t =>
  t.deepEqual(skipArr(new Uint8Array([1, 2, 3]), 1), [2, 3]))
test('iterable', t =>
  t.deepEqual(
    skipArr(
      (function*() {
        yield* [1, 2, 3]
      })(),
      2
    ),
    [3]
  ))

test('throws error on non-finite count values', t => {
  t.throws(() => [...skip([1, 2], -Infinity as any)])
  t.throws(() => [...skip([1, 2], Infinity as any)])
  t.throws(() => [...skip([1, 2], NaN as any)])
})
