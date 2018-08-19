import {arrayTypes } from '.'
import test from 'ava'

test('check array types', t => {
  for (let arrayType of arrayTypes) {
    t.true(typeof arrayType.prototype.slice === 'function')
  }
})
