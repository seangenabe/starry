import { take } from '.'
import test from 'ava'

let s = 'abcd'

const takeArr = (i, count?: number) => [...take(i, count)]

test('empty', t => t.deepEqual(takeArr([]), []))
test('take 0 values', t => t.deepEqual(takeArr(s, 0), []))
test('take without count arg', t => t.deepEqual(takeArr(s), ['a']))
test('take some values', t => t.deepEqual(takeArr(s, 2), ['a', 'b']))
test('take more than length', t =>
  t.deepEqual(takeArr(s, 30), ['a', 'b', 'c', 'd']))
test('array slice', t =>
  t.deepEqual(takeArr(['a', 'b', 'c', 'd'], 2), ['a', 'b']))

test('throws error when not finite', t => {
  t.throws(() => [...take([1, 2], Infinity)])
  t.throws(() => [...take([1, 2], -Infinity)])
  t.throws(() => [...take([1, 2], NaN)])
})
