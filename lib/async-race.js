'use strict'

const asyncOperation = require('./_async-operation')

module.exports = function asyncRace(iterable, asyncAction) {
  return asyncOperation(i => Promise.race(i), iterable, asyncAction)
}
