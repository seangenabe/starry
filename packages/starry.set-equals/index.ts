function setEquals<T1>(iterable: Iterable<T1>): boolean
function setEquals<T1, T2>(i1: Iterable<T1>, i2: Iterable<T2>): boolean
function setEquals<T1, T2, T3>(i1: Iterable<T1>, i2: Iterable<T2>, i3: Iterable<T3>): boolean
function setEquals<TAll>(...iterables: Iterable<TAll>[]): boolean

function setEquals<T>(
  ...iterables: Iterable<T>[]
): boolean {

  if (iterables.length === 0) {
    return true
  }

  if (iterables.length === 1) {
    if (typeof iterables[Symbol.iterator] !== 'function') {
      throw new TypeError("Argument `iterables[0]` is not iterable.")
    }
    return true
  }

  const first = new Set(iterables.shift() as Iterable<T>)
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

export = setEquals
