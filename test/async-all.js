import test from 'ava'
import all from '../lib/async-all'

test('should all resolve', async t => {
  let result = await all([1, 2, 3], x => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x + 1)
      }, x * 100)
    })
  })
  t.deepEqual(result, [2, 3, 4])
})

test.cb('should reject', t => {
  let p = all([0, 1, 2], x => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (x / x !== x / x) {
          reject(new Error("oh noes"))
        }
        else {
          resolve(x / x)
        }
      }, x * 10 + 100)
    })
  })
  t.throws(p, /oh noes/)
  t.end()
})
