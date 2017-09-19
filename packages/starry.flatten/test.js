const test = require('ava')
const flatten = require('.')

test('blank', t => {
  t.deepEqual([...flatten()], [])
})

function* a() {
  yield 1
  yield 2
}

function* b() {
  yield 3
  yield 4
}

function* c() {
  yield a()
  yield b()
}

test('flatten', t => {
  const r1 = [...flatten([[1, 2], [3, 4]])]
  t.deepEqual(r1, [1, 2, 3, 4])
  const r2 = [...flatten(c())]
  t.deepEqual(r2, [1, 2, 3, 4])
})
