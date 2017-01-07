const arrayTypes = require('starry._array-types')
const take = require('starry.take')
const iteratorToIterable = require('starry.iterator-to-iterable')

module.exports = function* skip(iterable, count = 1) {
  if (!Number.isFinite(count)) {
    throw new Error("Argument `count` must be finite.")
  }
  if (count <= 0) { return }

  if (arrayTypes.has(iterable.constructor)) {
    yield* iterable.slice(count)
    return
  }

  let iterator = iterable[Symbol.iterator]()
  let iterableWrap = iteratorToIterable(iterator)

  let a = take(iterableWrap, count)
  console.error('[...a]', require('util').inspect([...a], { colors: true })) // DEBUG

  console.error('[...iterableWrap]', require('util').inspect([...iterableWrap], { colors: true })) // DEBUG
  yield* iterableWrap
}
