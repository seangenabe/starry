const last = require('.')
const t = require('ava')

t('last value of an iterator', t => {
  let result = last((function*() {
    yield 5
    yield 6
    yield 7
  })())
  t.is(result, 7)
})

t('last value of an array', t => {
  t.is(last(Uint32Array.from([1, 2, 3])), 3)
})

t('last value of an empty array', t => {
  t.is(last(Uint32Array.from([])), undefined)
})
