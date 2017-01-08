const take = require('../starry.take')
const skip = require('../starry.skip')
const test = require('ava')

test('combination', t => {
  let x = skip(naturals(), 2)
  t.deepEqual([...take(x, 3)], [3, 4, 5])
  t.deepEqual([...take(x, 3)], [3, 4, 5])
})

function* naturals() {
  for (let i = 0; i < 100; i++) {
    return i
  }
}
