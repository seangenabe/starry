module.exports = function any(iterable = []) {
  for (let item of iterable) { // eslint-disable-line no-unused-vars
    return true
  }
  return false
}
