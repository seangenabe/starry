const any = require('.')
const test = require('ava')

test(t => {
  t.false(any([]), 'must be empty')
  t.true(any('abcd'), 'must be non-empty')
  t.false(any())
})
