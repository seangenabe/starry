const includes = require('.')
const test = require('ava')

function* nums() {
  yield 1
  yield 2
  yield 3
}

test(t => {
  t.truthy(includes(nums(), 1))
  t.truthy(includes(nums(), 2))
  t.truthy(includes(nums(), 3))
  t.falsy(includes(nums(), 4))
  t.falsy(includes(nums(), undefined))
  t.truthy(includes(new Set([1, 2]), 1))
  t.truthy(includes(new Uint32Array([1, 2, 3]), 3))
})
