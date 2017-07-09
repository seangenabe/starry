const test = require('ava')
const zip = require('.')

test(t => {
  const r = [...zip(['a', 'b'], [1, 2], [true, false])]
  t.deepEqual(r, [['a', 1, true], ['b', 2, false]])

  const r2 = [...zip([1, 'a'], [])]
  t.deepEqual(r2, [[1, undefined], ['a', undefined]])
})
