const bound = require('.')
const t = require('ava')

function* mult(iterable, multiplier) {
  for (let element of iterable) {
    yield element * multiplier
  }
}

t(t => {
  let m = bound(mult)
  let result = m.call([1, 2, 3], 2)
  t.deepEqual(result, [2, 4, 6])
})
