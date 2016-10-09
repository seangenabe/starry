const first = require('.')
const t = require('ava')

function* nums() {
  yield 1
  yield 2
  yield 3
}

t(t => {
  let result = first(nums())
  t.is(result, 1)
  t.is(first([4, 5]), 4)
})

t(t => {
  t.is(first(), undefined)
})
