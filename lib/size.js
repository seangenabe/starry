module.exports = function size(iterable) {
  if (iterable == null) {
    throw new TypeError("iterable is not defined")
  }
  let ret = 0
  for (let element of iterable) {
    ret++
  }
  return ret
}
