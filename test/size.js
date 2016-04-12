import test from 'ava'
import size from '../lib/size'

test('should count properly', t => {
  t.is(size(Array.from({ length: 100 })), 100)
})

test('should fail on null iterables', t => {
  t.throws(size, TypeError)
  t.throws(() => size(null), TypeError)
})
