const map = require('.')
const t = require('ava')

t(t => {
  let x = (function*() {
    yield 4
    yield 5
    yield 6
  })()
  let o = {}
  let result = map(
    x,
    (element, iterable) => {
      t.is(iterable, x)
      t.truthy(element >= 4 && element <= 6)
      return element - 3
    },
    o
  )
  t.deepEqual([...result], [1, 2, 3])
})

t('iterable must be iterable', t => {
  t.throws(() => [...map(NaN, x => x)])
  t.throws(() => [...map({ [Symbol.iterator]: null }, x => x)])
  t.throws(() => [...map({})])
})

t('callback must be a function', t => {
  t.throws(() => [...map('abc', NaN)])
  t.throws(() => [...map('abc', {})])
})

t('default callback', t => {
  const r1 = [...map([1, 2])]
  t.deepEqual(r1, [1, 2])
})

t('default iterable', t => {
  const r1 = [...map()]
  t.deepEqual(r1, [])
})
