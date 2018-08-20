import { first } from '.'
import test from 'ava'

test('check if returning first element only', t => {
  let result = first(
    (function* nums() {
      yield 1
      t.fail()
      yield 2
    })()
  )
  t.is(result, 1)
  t.is(first([4, 5]), 4)
})

test(t => {
  t.is(first(), undefined)
})
