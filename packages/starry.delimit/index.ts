import generatorToIterable from 'starry.generator-to-iterable'

export default function delimit<TItem, TDelimiter>(
  iterable: Iterable<TItem>, delimiter: TDelimiter
): Iterable<TItem | TDelimiter> {

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
