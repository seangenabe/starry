import { intersection } from '.'
import test, { GenericTestContext, Context } from 'ava'

const createNums = () => ({
  *[Symbol.iterator]() {
    yield 1
    yield 2
    yield 3
  }
})
const nums = createNums()

const intersectionArr = <T>(...args: Iterable<T>[]) => [
  ...intersection(...args)
]

const selfIntersectionTest = <T>(
  t: GenericTestContext<Context<any>>,
  iterFn: () => Iterable<T>
) => {
  for (let i = 2; i < 5; i++) {
    const args = Array.from({ length: i }, iterFn)
    const r = [...intersection(...args)]
    t.deepEqual(r, [...iterFn()])
  }
}

test('self-intersect test: array', t =>
  selfIntersectionTest(t, () => [1, 2, 3]))
test('self-intersect test: set', t =>
  selfIntersectionTest(t, () => new Set([1, 2, 3])))
test('self-intersect test: iterable', t => selfIntersectionTest(t, createNums))

test('basic', t => {
  const r1 = [...intersection(nums, [2, 3, 4])]
  t.deepEqual(r1, [2, 3])
  const r2 = [...intersection(nums, new Set([2, 3, 4]))]
  t.deepEqual(r2, [2, 3])
  const r3 = [...intersection([2, 3, 4], nums)]
  t.deepEqual(r3, [2, 3])
  const r4 = [...intersection('abc', 'def', 'ghi')]
  t.deepEqual(r4, [])
  const r5 = [...intersection('aaaa')]
  t.deepEqual(r5, ['a'])
})

test('empty input', t => {
  const r1 = [...intersection([])]
  t.deepEqual(r1, [])
  const r2 = [...intersection()]
  t.deepEqual(r2, [])
})
