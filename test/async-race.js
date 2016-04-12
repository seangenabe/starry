import test from 'ava'
import race from '../lib/async-race'

test('should resolve with fastest', async t => {
  let result = await race([11, 23, 34], x => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(x * 10), x * 10)
    })
  })
  t.is(result, 110)
})

test('should reject with fastest', async t => {
  let p = race([23, 11, 34], x => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (x === 11) {
          reject(new Error('oh noes'))
        }
        else {
          resolve(x * 10)
        }
      }, x * 20)
    })
  })
  t.throws(p, /oh noes/)
})
