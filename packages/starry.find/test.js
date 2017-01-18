const find = require('.')
const t = require('ava')

t('empty array', t => {
  t.is(find([]), undefined)
})

t('find with predicate', t => {
  let arr = [7, 8, 6, 70]
  t.is(find(arr, x => x % 2 === 0), 8)
  t.is(find(arr, x => x % 2 === 1), 7)
  t.is(find(arr, x => x > 100), undefined)
})
