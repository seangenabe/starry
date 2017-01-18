const arrayTypes = require('starry._array-types')
const generatorToIterable = require('starry.generator-to-iterable')

module.exports = function take(iterable, count = 1) {
  if (!Number.isFinite(count)) {
    throw new TypeError("Argument `count` is not a finite number.")
  }
  if (count <= 0) {
    return []
  }
  if (arrayTypes.has(iterable.constructor)) {
    return iterable.slice(0, count)
  }

  return generatorToIterable(function* takeGenerator() {
    let iterator = iterable[Symbol.iterator]()
    while (count > 0) {
      let iteration = iterator.next()
      if (iteration.done) {
        return
      }
      yield iteration.value
      count--
    }
  })
}
