const asyncOperation = require('./_async-operation')

module.exports = function asyncAll(iterable, asyncAction) {
  return asyncOperation(i => Promise.all(i), iterable, asyncAction)
}
