import { filter } from '.'
import test from 'ava'

test('empty', t => {
  t.is([...filter([])].length, 0)
})

function* nums() {
  for (let i = 0; i < 10; i++) {
    yield i
  }
}

test('even only', t => {
  let result = [...filter(nums(), n => n % 2 === 0)]
  t.deepEqual(result, [0, 2, 4, 6, 8])
})

test('default predicate', t => {
  let result = [...filter([false, true, false, true])]
  t.deepEqual(result, [true, true])
})

test('iterable must be iterable', t => {
  t.throws(() => [...filter({ [Symbol.iterator]: null } as any, x => x)])
  t.throws(() => [...filter(1 as any, x => x)])
})

test('callback must be a function', t => {
  t.throws(() => filter('abc', NaN as any))
  t.throws(() => filter('abc', {} as any))
})
