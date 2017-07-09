export default function bound<TObject, TArgs, TOut>(
  fn: ((object: TObject, ...args: TArgs[]) => TOut)
): (this: TObject, ...args: TArgs[]) => TOut {

  return function boundFunction(...args) {
    return fn(this, ...args)
  }
}
