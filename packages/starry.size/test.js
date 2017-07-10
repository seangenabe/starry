const size = require('.')
const t = require('ava')

function* letters() {
  yield 'a'
  yield 'b'
  yield 'c'
}

t('generator size', t => {
  let result = size(letters())
  t.is(result, 3)
})

t('array size', t => {
  t.is(size([]), 0)
  t.is(size(['a', 'b', 'c']), 3)
})

t('set size', t => {
  t.is(size(new Set(['a', 'b', 'c'])), 3)
})

t('map size', t => {
  t.is(size(new Map([['a', 1], ['b', 2]])), 2)
})

t('empty arg', t => {
  t.is(size(), 0)
})
