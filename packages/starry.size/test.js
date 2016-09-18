const size = require('.')
const t = require('ava')

t(t => {
  t.is(size((function*() {
    yield 'a'
    yield 'b'
    yield 'c'
  })(), 3))
})

t(t => {
  t.is(size([]), 0)
})

t(t => {
  t.is(size(new Set(['a', 'b', 'c'])), 3)
})
