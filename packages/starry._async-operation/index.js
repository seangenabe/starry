const map = require('starry.map')
const Util = require('util')

module.exports = Util.deprecate(
  function asyncOperation(operation, iterable, asyncAction) {
    return operation(map(iterable, asyncAction))
  },
  "Use starry.map instead"
)
