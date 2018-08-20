import { find } from '.'
import test from 'ava'

test('empty array', t => {
  t.is((find as any)([]), undefined)
})

test('find with predicate', t => {
  let arr = [7, 8, 6, 70]
  t.is(find(arr, x => x % 2 === 0), 8)
  t.is(find(arr, x => x % 2 === 1), 7)
  t.is(find(arr, x => x > 100), undefined)
})
