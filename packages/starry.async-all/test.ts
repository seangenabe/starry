import asyncAll = require('.')
import test from 'ava'

test('basic', async t => {
  let p = asyncAll([1, 2, 3], x => Promise.resolve(x * x))
  t.deepEqual(await p, [1, 4, 9])
})
