import generatorToIterable = require('starry.generator-to-iterable')

function chunk<T>(iterable: Iterable<T>, size: number): Iterable<T[]>

function chunk<T>(iterable: Iterable<T>, size: number = 1): Iterable<T[]> {
  return generatorToIterable(function* chunkGenerator() {
    const iterator = iterable[Symbol.iterator]()
    let iteration: IteratorResult<T>
    let arr: T[] = []
    while (!(iteration = iterator.next()).done) {
      arr.push(iteration.value)
      if (arr.length === size) {
        yield arr
        arr = []
      }
    }
    if (arr.length) {
      yield arr
    }
  })
}

export = chunk
