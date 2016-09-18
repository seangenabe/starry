const map = require('starry.map')

module.exports = function asyncRace(iterable, asyncAction) {
  return Promise.race(map(iterable, asyncAction))
}
