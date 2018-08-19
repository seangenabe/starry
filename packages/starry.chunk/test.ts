import { chunk } from '.'
import test from 'ava'

const positiveIntegers = {
  *[Symbol.iterator]() {
    for (let i = 1; i < 20; i++) {
      yield i
    }
    throw new Error('Pulled too many items.')
  }
}

test('empty', t => {
  const r = [...chunk([], 2)]
  t.deepEqual(r, [])
})

test('basic', t => {
  const r = [...chunk([1, 2, 3, 4], 2)]
  t.deepEqual(r, [[1, 2], [3, 4]])
  const r2 = [...chunk([1, 2, 3, 4])]
  t.deepEqual(r2, [[1], [2], [3], [4]])
  const r3 = [...chunk([1, 2, 3, 4], 3)]
  t.deepEqual(r3, [[1, 2, 3], [4]])
})

test('error', t => {
  t.throws(() => chunk([], 'string' as any)) // intentional
  t.throws(() => chunk([], NaN))
  t.throws(() => chunk([], -Infinity))
  t.throws(() => chunk([], Infinity))
  t.throws(() => chunk([], 0))
  t.throws(() => chunk([], -1))
})

test('infinite iterable', t => {
  const r = chunk(positiveIntegers, 2)

  const i = r[Symbol.iterator]()
  t.deepEqual(i.next(), { done: false, value: [1, 2] })
  t.deepEqual(i.next(), { done: false, value: [3, 4] })

  const i2 = r[Symbol.iterator]()
  t.deepEqual(i2.next(), { done: false, value: [1, 2] })
  t.deepEqual(i2.next(), { done: false, value: [3, 4] })
})
