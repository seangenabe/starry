'use strict'

const asyncOperation = require('starry._async-operation')

module.exports = function asyncRace(iterable, asyncAction) {
  return asyncOperation(i => Promise.race(i), iterable, asyncAction)
}
