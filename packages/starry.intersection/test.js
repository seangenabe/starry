const intersection = require('.')
const test = require('ava')

const nums = {
  *[Symbol.iterator]() {
    yield 1
    yield 2
    yield 3
  }
}

{
  const possibleArgs = [
    [() => [1, 2, 3], 'array'],
    [() => new Set([1, 2, 3]), 'set'],
    [() => nums, 'iterable']
  ]
  for (let [possibleArgFn, type] of possibleArgs) {
    test(`self-intersect test: ${type}`, t => {
      for (let i = 2; i < 5; i++) {
        const args = Array.from({ length: i }, possibleArgFn)
        const r = [...intersection(...args)]
        t.deepEqual(r, [...possibleArgFn()])
      }
    })
  }
}

test('basic', t => {
  const r1 = [...intersection(nums, [2, 3, 4])]
  t.deepEqual(r1, [2, 3])
  const r2 = [...intersection(nums, new Set([2, 3, 4]))]
  t.deepEqual(r2, [2, 3])
  const r3 = [...intersection([2, 3, 4], nums)]
  t.deepEqual(r3, [2, 3])
  const r4 = [...intersection('abc', 'def', 'ghi')]
  t.deepEqual(r4, [])
})

test('empty input', t => {
  const r1 = [...intersection([])]
  t.deepEqual(r1, [])
  const r2 = [...intersection()]
  t.deepEqual(r2, [])
})
