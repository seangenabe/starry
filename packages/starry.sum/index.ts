import reduce = require('starry.reduce')

export = function sum(
  iterable: Iterable<number>
): number {

  return reduce<number, number>(iterable, (a, b) => a + Number(b), 0)
}
