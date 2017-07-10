const intersection = require('.')
const t = require('ava')

t(t => {
  const r1 = [...intersection([1, 2, 3], [2, 3, 4])]
  t.deepEqual(r1, [2, 3])
  const r2 = [...intersection([2, 'a', 'c'], [], ['d', 3, 'p'])]
  t.deepEqual(r2, [])
  const r3 = [...intersection([])]
  t.deepEqual(r3, [])
  const r4 = [...intersection()]
  t.deepEqual(r4, [])
})
