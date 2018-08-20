import { reverse } from '.'
import test from 'ava'

test('blank', t => {
  const r1 = [...(reverse as any)()]
  t.deepEqual(r1, [])
})

test('array', t => {
  const r1 = [...reverse([1, 2, 3])]
  t.deepEqual(r1, [3, 2, 1])
})

function* a() {
  yield 1
  yield 2
  yield 3
}

test('iterable', t => {
  const r1 = [...reverse(a())]
  t.deepEqual(r1, [3, 2, 1])
})

test('string', t => {
  const r2 = [...reverse('hi')]
  t.deepEqual(r2, ['i', 'h'])
})
