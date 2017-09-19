```typescript
function _sameValueZero(x: any, y: any): boolean
```

Reimplements ECMAScript's `SameValueZero` wherein two values equal if they are of the same value or if both of them are zero regardless of sign.

* `-0` and `+0` are equal.
* `NaN` and `NaN` are equal.

Parameters:
* x: `any`
* y: `any`

Returns: `Boolean`
