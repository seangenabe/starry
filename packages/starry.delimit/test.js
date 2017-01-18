const test = require('ava')
const delimit = require('.')

const tests = [
  ["delimit 0 values", [[], ','], []],
  ["delimit 1 value", [['a'], ','], ['a']],
  ["delimit some values", [['a', 4, Infinity], ','], ['a', ',', 4, ',', Infinity]]
]

for (let [testName, args, expected] of tests) {
  test(testName, t => {
    let arr = [...delimit(...args)]
    t.deepEqual(arr, expected)
  })
}
