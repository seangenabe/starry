import race = require('.')
import test from 'ava'

test(async t => {
  let p = race(
    [40, 90],
    x => new Promise(resolve => setTimeout(() => resolve(x)))
  )
  t.is(await p, 40)
})
