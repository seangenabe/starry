import { includes } from '.'
import test from 'ava'

function* nums() {
  yield 1
  yield 2
  yield 3
}

test(t => {
  t.true(includes(nums(), 1))
  t.true(includes(nums(), 2))
  t.true(includes(nums(), 3))
  t.false(includes(nums(), 4))
  t.false(includes(nums(), undefined))
  t.true(includes(new Set([1, 2]), 1))
  t.true(includes(new Uint32Array([1, 2, 3]), 3))
})
