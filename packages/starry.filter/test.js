const filter = require('.')
const t = require('ava')

t('empty', t => {
  t.is([...filter([])].length, 0)
})

function* nums() {
  for (let i = 0; i < 10; i++) {
    yield i
  }
}

t('even only', t => {
  let result = [...filter(nums(), n => n % 2 === 0)]
  t.deepEqual(result, [0, 2, 4, 6, 8])
})

t('default predicate', t => {
  let result = [...filter([false, true, false, true])]
  t.deepEqual(result, [true, true])
})
