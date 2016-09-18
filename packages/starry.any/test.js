const any = require('.')
const t = require('ava')

t(t => {
  let result = any((function*() {
  })())
  t.false(result)
})

t(t => {
  let result = any((function*() {
    yield ''
  })())
  t.true(result)
})
