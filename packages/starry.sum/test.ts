import { sum } from '.'
import test from 'ava'

test('empty iterable', t => {
  t.is(sum([]), 0)
})

test('single element', t => {
  t.is(sum([9]), 9)
})

test('some elements', t => {
  t.is(sum([1, 2, 3]), 6)
  t.is(sum(_123()), 6)
})

function* _123() {
  yield* [1, 2, 3]
}
