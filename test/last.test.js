import test from 'ava'
import last from '../lib/last'

test(t => {
  t.is(last('abc'), 'c')
  t.is(last([1, 2, 3]), 3)
  t.is(last(new Set([1, 2, 3])), 3)
  t.is(last([]), undefined)
  t.throws(last)
})
