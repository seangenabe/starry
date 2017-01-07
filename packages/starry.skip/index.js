const arrayTypes = require('starry._array-types')
const take = require('starry.take')
const iteratorToIterable = require('starry.iterator-to-iterable')

module.exports = function skip(iterable, count = 1) {
  if (!Number.isFinite(count)) {
    throw new Error("Argument `count` must be finite.")
  }
  if (count <= 0) {
    return iterable
  }
  if (arrayTypes.has(iterable.constructor)) {
    return iterable.slice(count)
  }

  return (function* skipGenerator() {
    let iterator = iterable[Symbol.iterator]()
    let iterableWrap = iteratorToIterable(iterator)

    for (let skippedValue of take(iterableWrap, count)) {}

    yield* iterableWrap
  })()
}
