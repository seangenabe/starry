import { map } from '.'
import test from 'ava'

test(t => {
  let x = (function*() {
    yield 4
    yield 5
    yield 6
  })()
  let result = map(x, (element, iterable) => {
    t.is(iterable, x)
    t.true(element >= 4 && element <= 6)
    return element - 3
  })
  t.deepEqual([...result], [1, 2, 3])
})

test('iterable must be iterable', t => {
  t.throws(() => [...map(NaN as any, x => x)])
  t.throws(() => [...map({ [Symbol.iterator]: null } as any, x => x)])
  t.throws(() => [...map({} as any)])
})

test('callback must be a function', t => {
  t.throws(() => [...map('abc', NaN as any)])
  t.throws(() => [...map('abc', {} as any)])
})

test('default callback', t => {
  const r1 = [...map([1, 2])]
  t.deepEqual(r1, [1, 2])
})

test('default iterable', t => {
  const r1 = [...map()]
  t.deepEqual(r1, [])
})
