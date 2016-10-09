const first = require('.')
const t = require('ava')

t(t => {
  //let result = first(nums())
  //t.is(result, 1)
  t.is(first([4, 5]), 4)
})
