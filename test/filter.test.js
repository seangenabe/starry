import test from 'ava'
import filter from '../lib/filter'

test('should filter properly', t => {
  let result = filter(countup(), x => x % 2 === 0)

  // Check if Generator.
  t.is(typeof result[Symbol.iterator], 'function')
  t.is(typeof result.next, 'function')

  t.deepEqual(Array.from(result), [2, 4, 6, 8, 10])
})

test('should throw on null iterables', t => {
  t.throws(() => Array.from(filter(null)))
  t.throws(() => Array.from(filter(undefined)))
})

test('predicate should default to Boolean', t => {
  t.deepEqual(Array.from(filter([1, 2, 0, 3, null, 4])), [1, 2, 3, 4])
})

function* countup() {
  for (let i = 1; i <= 10; i++) {
    yield i
  }
}
