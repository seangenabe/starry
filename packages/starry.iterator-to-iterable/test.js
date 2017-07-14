const iteratorToIterable = require('.')
const test = require('ava')

test('basic', t => {

  let iterator = new IncrementMaster()

  let iterable = iteratorToIterable(iterator)
  t.truthy(typeof iterable[Symbol.iterator] === 'function')

  iterable[Symbol.iterator]()
  let i = iterable[Symbol.iterator]()
  t.deepEqual(i.next(), { done: false, value: 0 })
  t.deepEqual(i.next(), { done: false, value: 1 })
  t.deepEqual(i.next(), { done: false, value: 2 })
  t.deepEqual(i.next(), { done: true }, "check iterator done once")
  t.deepEqual(i.next(), { done: true }, "check iterator done twice")
  t.is(iterator.value, 3, "check input iterator value")
})

test('rest', t => {
  let iterator = new IncrementMaster()
  let arr = [...iteratorToIterable(iterator)]
  t.deepEqual(arr, [0, 1, 2])
  t.is(iterator.value, 3)
})

test('throw if iterator is not an iterator', t => {
  t.throws(() => iteratorToIterable({ next: null }))
})

test('return iterator.next when next is called', t => {
  let iterator = new IncrementMaster()
  let iterable = iteratorToIterable(iterator)
  t.deepEqual(iterable.next(), { done: false, value: 0 })
})

test('error', t => {
  t.throws(() => [...iteratorToIterable(NaN)], TypeError)
  t.throws(() => [...iteratorToIterable()], TypeError)
  t.throws(() => [...iteratorToIterable(undefined)], TypeError)
  t.throws(() => [...iteratorToIterable(null)], TypeError)
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
