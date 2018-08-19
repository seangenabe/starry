import { any } from '.'
import test from 'ava'

test('any empty', t => {
  t.false(any([]), 'must be empty')
  t.false(any())
})

test('any something', t => {
  t.true(any('abcd'), 'must be non-empty')
})
