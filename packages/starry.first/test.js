const first = require('.')
const t = require('ava')

t(t => {
  let result = first((function*() {
    yield 1
    yield 2
    yield 3
  }))
  t.is(result, 1)
})

t(t => {
  t.is(first(), undefined)
})