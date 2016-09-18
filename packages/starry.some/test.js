const some = require('.')
const t = require('ava')

t(t => {
  let result = some((function*() {
    yield false
    yield ''
  })(), x => typeof x === 'string')
  t.true(result)
})

t(t => {
  t.true(some([false, 6]))
})

t(t => {
  t.false(some([]))
})
