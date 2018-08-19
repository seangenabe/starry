import { delimit } from '.'
import test from 'ava'

test('delimit 0 values', t => {
  t.deepEqual([...delimit([], ',')], [])
})

test('delimit 1 value', t => {
  t.deepEqual([...delimit(['a'], ',')], ['a'])
})

test('delimit some values', t => {
  t.deepEqual(
    [...delimit(['a', 4, Infinity], ',')],
    ['a', ',', 4, ',', Infinity]
  )
})
