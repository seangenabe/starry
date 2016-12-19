const arrayTypes = require('starry._array-types')

module.exports = function* skip(iterable, count = 1) {
  if (!Number.isFinite(count)) {
    throw new TypeError("count must be a finite number")
  }
  if (count <= 0) { return }
  if (arrayTypes.has(iterable.constructor)) {
    yield* iterable.slice(count)
  }
  let i = 0
  let iterator = iterable[Symbol.iterator]()
  let iteratorCurrent = iterator.next()
  for (
    ;
    i < count && !iteratorCurrent.done;
    iteratorCurrent = iterator.next(), i++
  ) {
  }

  for (
    ;
    !iteratorCurrent.done;
    iteratorCurrent = iterator.next
  ) {
    yield iteratorCurrent.value
  }
}
