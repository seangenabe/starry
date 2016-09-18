const arrayTypes = require('.')
const t = require('ava')

t(t => {
  for (let type of arrayTypes) {
    t.is(typeof type.prototype.forEach, 'function')
  }
})
