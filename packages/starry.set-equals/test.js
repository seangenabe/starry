const test = require('ava')
const setEquals = require('.')

test('truthy', t => {
  const tests = [
    setEquals([1, 2], [2, 1]),
    setEquals([1, 2, 5], [2, 5, 1], [1, 5, 2]),
    setEquals([NaN], [NaN]),
    setEquals([], []),
    setEquals([1]),
    setEquals()
  ]
  tests.forEach(x => t.true(x))
})

test('falsy', t => {
  const tests = [
    setEquals([1, 3], [1, 2]),
    setEquals([1, 3, '#'], [3, 1]),
    setEquals([1, 3], [3, '#', 1]),
    setEquals([], [2])
  ]
  tests.forEach(x => t.false(x))
})

test('errors', t => {
  t.throws(() => setEquals(NaN))
  t.throws(() => setEquals(NaN, NaN))
  t.throws(() => setEquals({}))
})
