const last = require('.')
const test = require('ava')

test('last value of an iterator', t => {
  let result = last((function*() {
    yield 5
    yield 6
    yield 7
  })())
  t.is(result, 7)
})

test('last value of an array', t => {
  t.is(last(Uint32Array.from([1, 2, 3])), 3)
})

test('last value of an empty array', t => {
  t.is(last(Uint32Array.from([])), undefined)
})

test('array', t => {
  t.is(last([]), undefined)
})

test('empty arg', t => {
  t.is(last(), undefined)
})
