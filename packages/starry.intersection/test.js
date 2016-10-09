const intersection = require('.')
const t = require('ava')

t(t => {
  let r1 = [...intersection([1, 2, 3], [2, 3, 4])]
  t.deepEqual(r1, [2, 3])
  let r2 = [...intersection([2, 'a', 'c'], [], ['d', 3, 'p'])]
  t.deepEqual(r2, [])
  let r3 = [...intersection([])]
  t.deepEqual(r3, [])
})
