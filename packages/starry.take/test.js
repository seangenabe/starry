const take = require('.')
const test = require('ava')

let s = 'abcd'

let tests = [
  ['empty', [[]], []],
  ['take 0 values', [s, 0], []],
  ['take without count argument', [s], ['a']],
  ['take some values', [s, 2], ['a', 'b']],
  ['take more than length', [s, 30], ['a', 'b', 'c', 'd']]
]

for (let [testName, args, expected] of tests) {
  test(testName, t => {
    let arr = [...take(...args)]
    t.deepEqual(arr, expected)
  })
}

test('throws error when not finite', t => {
  t.throws(() => [...take([1, 2], Infinity)])
  t.throws(() => [...take([1, 2], -Infinity)])
  t.throws(() => [...take([1, 2], NaN)])
})
