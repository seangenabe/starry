import test from 'ava'
import every from '../lib/every'

test('should return true', t => {
  t.true(every(countup(), x => x < 11))
})

test('should return false', t => {
  t.false(every(countup(), x => x < 5))
})

test('do not allow null iterables', t => {
  t.throws(() => every(null, Boolean), TypeError)
  t.throws(() => every(undefined, Boolean), TypeError)
})

function* countup() {
  for (let i = 1; i <= 10; i++) {
    yield i
  }
}
