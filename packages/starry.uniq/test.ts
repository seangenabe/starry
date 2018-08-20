import { uniq } from '.'
import test from 'ava'

function* a() {
  yield 1
  yield 2
  yield 1
  yield 3
}

function* b() {
  yield 'aa'
  yield 'b'
  yield 'ab'
}

test('blank', t => {
  const r1 = [...(uniq as any)()]
  t.deepEqual(r1, [])
})

test('basic', t => {
  const r1 = [...uniq(a())]
  t.deepEqual(r1, [1, 2, 3])
})

test('key selector', t => {
  const r1 = [...uniq(b(), x => x[0])]
  t.deepEqual(r1, ['aa', 'b'])
})
