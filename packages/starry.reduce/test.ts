import { reduce } from '.'
import test from 'ava'

test('reduce without accumulator', t => {
  t.is(reduce([1, 2, 3, 4, 5], (x, y) => x + y), 15)
})

test('reduce with accumulator', t => {
  t.is(reduce('bc', (x, y) => x + y, 'a'), 'abc')
  t.is(reduce([1, -5], (x, y) => x ^ y, -31), 27)
})

test('accumulator must be a function', t => {
  t.throws(() => reduce('abc', NaN as any))
})

test('reduce empty', t => {
  t.throws(() => reduce([], (x, y) => x + y))
})
