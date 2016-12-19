const find = require('.')
const t = require('ava')

t('find', t => {
  t.is([...find([])].length, 0)
})

t(t => {
  let arr = [7, 8, 6, 70]
  t.equals(find(arr, x => x % 2 === 0), 8)
  t.equals(find(arr, x => x % 2 === 1), 1)
  t.equals(find(arr, x => x > 100), undefined)
})
