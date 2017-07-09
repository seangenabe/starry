const generatorToIterable = require('starry.generator-to-iterable')

module.exports = function zip(...iterables) {
  const iterators = iterables.map(c => c[Symbol.iterator]())
  const iteratorEnded = iterators.map(() => false)

  return generatorToIterable(function* zipGenerator() {
    do {
      const result = iterators.map((iterator, i) => {
        if (iteratorEnded[i]) {
          return { done: true }
        }
        const { done, value } = iterator.next()
        if (done) {
          iteratorEnded[i] = true
        }
        return { done, value }
      })
      if (result.every(r => r.done)) {
        break
      }
      yield result.map(r => r.value)
    } while (true)
  })
}
