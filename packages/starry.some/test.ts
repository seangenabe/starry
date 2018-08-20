import { some } from '.'
import test from 'ava'

test('true', t => {
  let result = some(
    (function*() {
      yield false
      yield ''
    })(),
    x => typeof x === 'string'
  )
  t.true(result)
})

test('no predicate', t => {
  t.true(some([false, 6]))
})

test('empty', t => {
  t.false(some([]))
})
