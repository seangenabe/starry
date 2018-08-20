import { skip } from '.'
import test from 'ava'

let s = 'abc'
const skipArr = (i, c?: number) => [...skip(i, c)]

test('empty', t => t.deepEqual(skipArr([]), []))
test('skip 0 values', t => t.deepEqual(skipArr(s, 0), ['a', 'b', 'c']))
test('skip without count arg', t => t.deepEqual(skipArr(s), ['b', 'c']))
test('skip some values', t => t.deepEqual(skipArr(s, 2), ['c']))
test('skip more than length', t => t.deepEqual(skipArr(s, 30), []))
test('array slice', t => t.deepEqual(skipArr(['a', 'b', 'c'], 2), ['c']))

test('throws error on non-finite count values', t => {
  t.throws(() => [...skip([1, 2], -Infinity)])
  t.throws(() => [...skip([1, 2], Infinity)])
  t.throws(() => [...skip([1, 2], NaN)])
})
