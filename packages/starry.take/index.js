const arrayTypes = require('starry._array-types')

module.exports = function* take(iterable, count = 1) {
  if (!Number.isFinite(count)) {
    throw new TypeError("count must be a finite number")
  }
  if (count <= 0) { return }
  if (arrayTypes.has(iterable.constructor)) {
    return iterable.slice(0, count)
  }
  let i = 0
  let iterator = iterable[Symbol.iterator]()
  let iteratorCurrent = iterator.next()
  for (
    ;
    i < count && !iteratorCurrent.done;
    iteratorCurrent = iterator.next(), i++
  ) {

    yield iteratorCurrent.value
  }
}
