export = function bound<TObject = any, TArgs = any, TOut = any>(
  fn: (object: TObject, ...args: TArgs[]) => TOut
): (this: TObject, ...args: TArgs[]) => TOut {

  return function boundFunction(...args) {
    return fn(this, ...args)
  }
}
