const every = require('starry.every')
const filter = require('starry.filter')
const generatorToIterable = require('starry.generator-to-iterable')
const includes = require('starry.includes')

module.exports = function intersection(...iterables) {
  if (!iterables.length) { return }
  let first = iterables.shift()
  return generatorToIterable(function* intersectionGenerator() {
    yield* filter(first, element1 => {
      return every(iterables, iterable => {
        return includes(iterable, element1)
      })
    })
  })
}
