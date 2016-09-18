const every = require('.')
const t = require('ava')

t('true, 2 params', t => {
  t.truthy(every(['foo', ''][Symbol.iterator], x => typeof x === 'string'))
})

t('true, 1 param', t => {
  t.truthy(every([true, 'blah']))
})

t('false, 1 param', t => {
  t.falsy(every([true, false]))
})

t('empty', t => {
  t.truthy(every([]))
})
