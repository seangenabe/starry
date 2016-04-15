import test from 'ava'
import intersection from '../lib/intersection'
import take from '../lib/take'

test(t => {
  t.fail()
  return

  // should be in order starting from the first argument.
  t.deepEqual(Array.from(intersection([1, 2, 3], [3, 4, 2])), [2, 3])
  {
    let a = Array.from(intersection(new Set([3, 2, 1]), new Set([3, 2, 4])))
    a.sort()
    t.deepEqual(a, [2, 3])
  }
  t.deepEqual(Array.from(intersection([1, 2, 3], [4, 5, 6])), [])
  t.deepEqual(Array.from(intersection([1, 2, 3, 4], [1, 2, 3])), [1, 2, 3])
  t.deepEqual(Array.from(intersection([1, 1], [1, 2], [1, 1])), [1])
  // test infinite series
  t.deepEqual(Array.from(take(intersection(infiniteEvens(), infiniteFirstTwoByFours()), 20)), [0, 4, 8, 12, 16])
})

function* infiniteEvens() {
  for (let i = 0;; i = i + 2) {
    yield i
  }
}

function* infiniteFirstTwoByFours() { // 0, 1, 4, 5, 8, 9, ...
  for (let i = 0;; i = i + 4) {
    yield i
    yield i + 1
  }
}
