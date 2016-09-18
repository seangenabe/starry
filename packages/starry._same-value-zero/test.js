const _sameValueZero = require('.')
const t = require('ava')

t(t => {
  t.truthy(_sameValueZero(1, 1))
  t.truthy(_sameValueZero("abc", "abc"))
  t.falsy(_sameValueZero({}, {}))
  t.truthy(_sameValueZero(-0, 0))
  t.truthy(_sameValueZero(Infinity, Infinity))
  t.truthy(_sameValueZero(NaN, NaN))
})
