'use strict'

const asyncOperation = require('starry._async-operation')

module.exports = function asyncAll(iterable, asyncAction) {
  return asyncOperation(i => Promise.all(i), iterable, asyncAction)
}
