const take = require('.')
const t = require('ava')

t(t => {
  let s = 'abcd'
  t.deepEqual([...take(s)], ['a'])
  t.deepEqual([...take([])], [])
  t.deepEqual([...take(s, 2)], ['a', 'b'])
  t.deepEqual([...take(s, 30)], ['a', 'b', 'c', 'd'])
})

t('throws error when not finite', t => {
  t.throws(() => [...take([1, 2], Infinity)])
  t.throws(() => [...take([1, 2], NaN)])
})
