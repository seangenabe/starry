const first = require('.')
const t = require('ava')

t(t => {
  let result = first((function* nums() {
    yield 1
    t.fail()
    yield 2
  })())
  t.is(result, 1)
  t.is(first([4, 5]), 4)
})
