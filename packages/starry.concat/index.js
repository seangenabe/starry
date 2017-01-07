module.exports = function* concat(...iterables) {
  for (let iterator of iterables) {
    yield* iterator
  }
}
