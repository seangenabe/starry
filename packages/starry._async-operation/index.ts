import { map } from 'starry.map'
import { deprecate } from 'util'

export = deprecate(function asyncOperation(operation, iterable, asyncAction) {
  return operation(map(iterable, asyncAction))
}, 'Use starry.map instead')
