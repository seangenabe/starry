export = function any<T>(iterable: Iterable<T> = []): boolean {

  for (let item of iterable) {
    return true
  }
  return false
}