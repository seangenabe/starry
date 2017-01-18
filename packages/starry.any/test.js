const any = require('.')
const test = require('ava')

test('empty', t => {
  t.false(any([]))
})

test('non-empty', t => {
  t.true(any('abcd'))
})
