const test = require('ava')
const generatorToIterable = require('.')

function* positiveIntegers() {
  for (let i = 1; i < 20; i++) {
    yield i
  }
  throw new Error("Pulled too many items.")
}

test("environment test -- generators won't save state", t => {
  let res = positiveIntegers()
  let iterator1 = res[Symbol.iterator]()
  t.deepEqual(iterator1.next(), { done: false, value: 1 })
  t.deepEqual(iterator1.next(), { done: false, value: 2 })
  t.deepEqual(iterator1.next(), { done: false, value: 3 })
  let iterator2 = res[Symbol.iterator]()
  t.deepEqual(iterator2.next(), { done: false, value: 4 })
  t.deepEqual(iterator2.next(), { done: false, value: 5 })
  t.deepEqual(iterator2.next(), { done: false, value: 6 })
})

test('should save original iterable state', t => {
  let res = generatorToIterable(positiveIntegers)
  let iterator1 = res[Symbol.iterator]()
  t.deepEqual(iterator1.next(), { done: false, value: 1 })
  t.deepEqual(iterator1.next(), { done: false, value: 2 })
  t.deepEqual(iterator1.next(), { done: false, value: 3 })
  let iterator2 = res[Symbol.iterator]()
  t.deepEqual(iterator2.next(), { done: false, value: 1 })
  t.deepEqual(iterator2.next(), { done: false, value: 2 })
  t.deepEqual(iterator2.next(), { done: false, value: 3 })
})
