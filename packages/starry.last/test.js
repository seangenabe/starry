const last = require('.')
const t = require('ava')

t(t => {
  let result = last((function*() {
    yield 1
    yield 2
    yield 3
  })())
  t.is(result, 3)
})

t(t => {
  t.is(last(Uint32Array.from([1, 2, 3])), 3)
})
