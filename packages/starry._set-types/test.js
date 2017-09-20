const _setTypes = require('.')
const t = require('ava')

t(t => {
  t.truthy(_setTypes.has(Set))
  t.truthy(_setTypes.has(WeakSet))
})
