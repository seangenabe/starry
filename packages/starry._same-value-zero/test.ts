import { sameValueZero } from '.'
import test from 'ava'

test('sameValueZero correctness', t => {
  t.true(sameValueZero(1, 1))
  t.true(sameValueZero('abc', 'abc'))
  t.false(sameValueZero({}, {}))
  t.true(sameValueZero(-0, 0))
  t.true(sameValueZero(Infinity, Infinity))
  t.true(sameValueZero(NaN, NaN))
})
