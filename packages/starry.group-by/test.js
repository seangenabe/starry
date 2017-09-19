const test = require('ava')
const groupBy = require('.')

function* words() {
  yield 'aa'
  yield 'ab'
  yield 'ba'
}

test('blank', t => {
  t.deepEqual([...groupBy([]).entries()], [])
})

test('group iterable', t => {
  const r1 = groupBy(words(), i => i[0])
  t.deepEqual(r1.get('a'), ['aa', 'ab'])
  t.deepEqual(r1.get('b'), ['ba'])
})

test('value selector', t => {
  const r1 = groupBy(words(), i => i[0], i => i[1])
  t.deepEqual(r1.get('a'), ['a', 'b'])
  t.deepEqual(r1.get('b'), ['a'])
})
