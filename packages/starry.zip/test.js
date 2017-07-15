const test = require('ava')
const zip = require('.')

const pos = {
  *[Symbol.iterator]() {
    for (let i = 1; i < 20; i++) {
      yield i
    }
    throw new Error("Pulled too many items.")
  }
}

const even = {
  *[Symbol.iterator]() {
    for (let i = 2; i < 20; i++) {
      yield i
    }
    throw new Error("Pulled too many items.")
  }
}

test(t => {
  const r = [...zip(['a', 'b'], [1, 2], [true, false])]
  t.deepEqual(r, [['a', 1, true], ['b', 2, false]])

  const r2 = [...zip([1, 'a'], [])]
  t.deepEqual(r2, [[1, undefined], ['a', undefined]])
})

test('infinite iterables', t => {
  const r = zip(pos, even)
  const i1 = r[Symbol.iterator]()

  t.deepEqual(i1.next(), { done: false, value: [1, 2] })
  t.deepEqual(i1.next(), { done: false, value: [2, 4] })
})
