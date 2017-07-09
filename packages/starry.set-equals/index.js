module.exports = function setEquals(...iterables) {
  const first = new Set(iterables.shift())
  const rest = iterables.map(c => new Set(c))

  for (let x of first) {
    for (let other of rest) {
      if (other.has(x)) {
        other.delete(x)
      }
      else {
        return false
      }
    }
  }

  return rest.every(other => other.size === 0)
}
