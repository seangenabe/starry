export default function first<T>(
  iterable: Iterable<T> = []
): T | void {

  for (let item of iterable) {
    return item
  }
  return undefined
}
