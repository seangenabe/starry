import { setTypes } from '.'
import test from 'ava'

test('setTypes', t => {
  t.true(setTypes.has(Set))
  t.true(setTypes.has(WeakSet))
})
