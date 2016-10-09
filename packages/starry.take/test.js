const take = require('.')
const t = require('ava')

t(t => {
  let s = 'abcd'
  t.deepEqual([...take(s)], ['a'])
  t.deepEqual([...take([])], [])
  t.deepEqual([...take(s, 2)], ['a', 'b'])
  t.deepEqual([...take(s, 30)], ['a', 'b', 'c', 'd'])
})
