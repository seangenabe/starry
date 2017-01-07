module.exports = function* concat(...iterables) {
  for (let iterator of iterators) {
    yield* iterator
  }
}
