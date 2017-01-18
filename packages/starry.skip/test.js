const skip = require('.')
const test = require('ava')

let s = 'abcd'

let tests = [
  ['empty', [[]], []],
  ['skip 0 values', [s, 0], ['a', 'b', 'c', 'd']],
  ['skip without count argument', [s], ['b', 'c', 'd']],
  ['skip some values', [s, 2], ['c', 'd']],
  ['skip more than length', [s, 30], []],
  ['array slice', [['a', 'b', 'c', 'd'], 2], ['c', 'd']]
]

for (let [testName, args, expected] of tests) {
  test(testName, t => {
    let arr = [...skip(...args)]
    t.deepEqual(arr, expected)
  })
}

test('throws error on non-finite count values', t => {
  t.throws(() => [...skip([1, 2], -Infinity)])
  t.throws(() => [...skip([1, 2], Infinity)])
  t.throws(() => [...skip([1, 2], NaN)])
})
