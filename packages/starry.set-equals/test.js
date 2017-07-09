const test = require('ava')
const setEquals = require('.')

test(t => {
  const tests = [
    setEquals([1, 2], [2, 1]),
    setEquals([1, 2, 5], [2, 5, 1], [1, 5, 2]),
    setEquals([NaN], [NaN]),
    setEquals([], []),
    setEquals([1])
  ]
  tests.forEach(x => t.true(x))
})

test(t => {
  const tests = [
    setEquals([1, 3], [1, 2]),
    setEquals([1, 3, '#'], [3, 1]),
    setEquals([1, 3], [3, '#', 1]),
    setEquals([], [2])
  ]
  tests.forEach(x => t.false(x))
})

test(t => {
  t.throws(() => setEquals(NaN))
})
