import test from 'ava'
import take from '../lib/take'

test(t => {
  t.deepEqual(Array.from(take([1, 2])), [1]) // default 1
  t.throws(() => take([1, 2], NaN))
  t.throws(() => take([1, 2], 'string'))
  t.deepEqual(Array.from(take(infiniteEvens(), 5)), [0, 2, 4, 6, 8])
  t.deepEqual(Array.from(take([1, 2, 3], 5)), [1, 2, 3])
})

function* infiniteEvens() {
  for (let i = 0;; i = i + 2) {
    yield i
  }
}
