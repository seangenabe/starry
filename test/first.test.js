import test from 'ava'
import first from '../lib/first'

test(t => {
  t.is(first('abc'), 'a')
  t.is(first([1, 2, 3]), 1)
  t.is(first(new Set([1, 2, 3])), 1)
  let a = []
  a[-1] = 'foo'
  t.is(first(a), undefined)
  t.throws(first)
  t.is(first(infiniteCountup()), 1)
})

function* infiniteCountup() {
  for (let i = 1;; i++) { yield i }
}
