const asyncAll = require('.')
const t = require('ava')

t(async t => {
  let p = asyncAll([1, 2, 3], x => Promise.resolve(x * x))
  t.deepEqual(await p, [1, 4, 9])
})
