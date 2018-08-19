import { every } from '.'
import test from 'ava'

test('true, 2 params', t => {
  t.truthy(every(['foo', ''], x => typeof x === 'string'))
})

test('true, 1 param', t => {
  t.truthy(every([true, 'blah']))
})

test('false, 1 param', t => {
  t.falsy(every([true, false]))
})

test('empty', t => {
  t.truthy(every([]))
})
