import test from 'ava'
import bound from '../lib/bound'

test(t => {
  let boundSquare = bound(squareMe)
  t.deepEqual(boundSquare.call([2, 3, 1], 3), [8, 27, 1])
})

function squareMe(arr, exp) {
  return arr.map(n => Math.pow(n, exp))
}
