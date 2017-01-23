const reduce = require('starry.reduce')

module.exports = function sum(iterable) {
  return reduce(
    iterable,
    function sumAccumulator(a, b) {
      return a + Number(b)
    },
    0
  )
}
