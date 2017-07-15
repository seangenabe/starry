const test = require('ava')
const chunk = require('.')

const positiveIntegers = {
  *[Symbol.iterator]() {
    for (let i = 1; i < 20; i++) {
      yield i
    }
    throw new Error("Pulled too many items.")
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
  t.throws(() => chunk([], "string"))
  t.throws(() => chunk([], NaN))
  t.throws(() => chunk([], -Infinity))
  t.throws(() => chunk([], Infinity))
  t.throws(() => chunk([], 0))
  t.throws(() => chunk([], -1))
})

test('infinite iterable', t => {
  const r = chunk(positiveIntegers, 2)

  const i = r[Symbol.iterator]()
  {
    const x1 = i.next()
    t.false(x1.done)
    t.deepEqual(x1.value, [1, 2])

    const x2 = i.next()
    t.false(x2.done)
    t.deepEqual(x2.value, [3, 4])
  }

  const i2 = r[Symbol.iterator]()
  {
    const x1 = i2.next()
    t.false(x1.done)
    t.deepEqual(x1.value, [1, 2])
  }
})