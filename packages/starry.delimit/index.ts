import generatorToIterable = require('starry.generator-to-iterable')

export = function delimit<T = any, U = any>(
  iterable: Iterable<T>, delimiter: U
): Iterable<T | U> {

  return generatorToIterable(function* delimitGenerator() {
    let firstRead = false
    for (let element of iterable) {
      if (!firstRead) {
        firstRead = true
      }
      else {
        yield delimiter
      }
      yield element
    }
  })
}
