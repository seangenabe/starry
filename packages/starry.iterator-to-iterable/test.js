const iteratorToIterable = require('.')
const test = require('ava')

test('basic', t => {

  let iterator = new IncrementMaster()
  t.truthy(iterator[Symbol.iterator] === undefined)

  let iterable = iteratorToIterable(iterator)
  t.truthy(typeof iterable[Symbol.iterator] === 'function')

  iterable[Symbol.iterator]()
  let i = iterable[Symbol.iterator]()
  t.is(i, iterator)
  t.deepEqual(i.next(), { done: false, value: 0 })
  t.deepEqual(i.next(), { done: false, value: 1 })
  t.deepEqual(i.next(), { done: false, value: 2 })
  t.deepEqual(i.next(), { done: true })
  t.deepEqual(i.next(), { done: true })
  t.is(iterator.value, 3)
})

test('rest', t => {
  let iterator = new IncrementMaster()
  let arr = [...iteratorToIterable(iterator)]
  t.deepEqual(arr, [0, 1, 2])
  t.is(iterator.value, 3)
})

class IncrementMaster {

  constructor() {
    this.value = 0
  }

  next() {
    if (this.value === 3) {
      return { done: true }
    }
    return {
      done: false,
      value: this.value++
    }
  }
}
