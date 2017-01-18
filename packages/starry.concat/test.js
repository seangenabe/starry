const test = require('ava')
const concat = require('.')

test('concat some iterables', t => {
  let arr = [...concat([1, 2, 3], [2, 5, 6])]
  t.deepEqual(arr, [1, 2, 3, 2, 5, 6])
})

test('concat nothing', t => {
  let arr = [...concat()]
  t.deepEqual(arr, [])
})
