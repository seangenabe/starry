```typescript
function bound<TObject = any, TArgs = any, TOut = any>(
  fn: (object: TObject, ...args: TArgs[]) => TOut
  ): (this: TObject, ...args: TArgs[]) => TOut
```

Returns a function that calls the input function with the first argument being the output function's context.

Parameters:
* fn: `(object: TObject, ...args: TArgs[]) => TOut`

Returns: `(this: TObject, ...args: TArgs[]) => TOut`
