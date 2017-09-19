export = function first<T = any>(
  iterable: Iterable<T> = []
): T | undefined {

  for (let item of iterable) {
    return item
  }
  return undefined
}
