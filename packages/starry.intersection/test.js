const intersection = require('.')
const t = require('ava')

t(t => {
  const r1 = [...intersection(nums(), [2, 3, 4])]
  t.deepEqual(r1, [2, 3])
  const r2 = [...intersection([2, 'a', 'c'], [], ['d', 3, 'p'])]
  t.deepEqual(r2, [])
  const r3 = [...intersection([])]
  t.deepEqual(r3, [])
  const r4 = [...intersection()]
  t.deepEqual(r4, [])
  const r5 = [...intersection([2, 2], [2, 2, 2])]
  t.deepEqual(r5, [2])
  const r6 = [...intersection(new Set([1, 2]), new Set([2, 2, 3]))]
  t.deepEqual(r6, [2])
})

function* nums() {
  yield 1
  yield 2
  yield 3
}
