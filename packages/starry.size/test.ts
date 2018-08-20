import { size } from '.'
import test from 'ava'

function* letters() {
  yield 'a'
  yield 'b'
  yield 'c'
}

test('generator size', t => {
  let result = size(letters())
  t.is(result, 3)
})

test('array size', t => {
  t.is(size([]), 0)
  t.is(size(['a', 'b', 'c']), 3)
})

test('set size', t => {
  t.is(size(new Set(['a', 'b', 'c'])), 3)
})

test('map size', t => {
  t.is(size(new Map([['a', 1], ['b', 2]])), 2)
})

test('string size', t => {
  t.is(size('hello'), 5)
})

test('empty arg', t => {
  t.is((size as any)(), 0)
})
