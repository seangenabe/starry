import generatorToIterable = require('starry.generator-to-iterable')

function chunk<T = any>(
  iterable: Iterable<T>,
  size: number = 1
  ): Iterable<T[]>
{
  if (!Number.isFinite(size)) {
    throw new TypeError("Argument `size` must be a finite number.")
  }
  if (size < 1) {
    throw new Error("Argument `size` must be greater than or equal to 1.")
  }
  return generatorToIterable(function* chunkGenerator() {
    const source: Iterator<T> = iterable[Symbol.iterator]()
    let arr: T[] = []
    let res: IteratorResult<T>
    while (!(res = source.next()).done) {
      arr.push(res.value)
      if (arr.length >= size) {
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
