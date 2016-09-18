const map = require('.')
const t = require('ava')

t(t => {
  let x = (function*() {
    yield 4
    yield 5
    yield 6
  })()
  let o = {}
  let result = map(
    x,
    function(element, iterable) {
      t.is(iterable, x)
      t.truthy(element >= 4 && element <= 6)
      t.is(this, o)
      return element - 3
    },
    o
  )
  t.deepEqual([...result], [1, 2, 3])
})
