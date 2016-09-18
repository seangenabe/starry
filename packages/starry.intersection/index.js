const filter = require('starry.filter')
const includes = require('starry.includes')
const every = require('starry.every')

module.exports = function* intersection(...iterables) {
  if (!iterables.length) { return }
  let first = iterables.shift()
  return filter(first, element1 => {
    return every(iterables, iterable => {
      return includes(iterable, first)
    })
  })
}
