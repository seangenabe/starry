const skip = require('.')
const t = require('ava')

t(t => {
  let s = 'abcd'
  t.deepEqual([...skip(s)], ['bcd'])
  t.deepEqual([...skip([])], [])
  t.deepEqual([...skip(s, 2)], ['c', 'd'])
  t.deepEqual([...skip(s, 30)], [])
})

t('throws error when not finite', t => {
  t.throws(() => [...skip([1, 2], Infinity)])
  t.throws(() => [...skip([1, 2], NaN)])
})
