const generatorToIterable = require('starry.generator-to-iterable')

module.exports = function delimit(iterable, delimiter) {
  return generatorToIterable(function* delimitGenerator() {
    let firstRead = false
    for (let item of iterable) {
      if (!firstRead) {
        firstRead = true
      }
      else {
        yield delimiter
      }
      yield item
    }
  })
}
