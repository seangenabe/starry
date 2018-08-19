/**
 * Reimplements ECMAScript's `SameValueZero`  wherein two values equal
 * if they are of the same value or if both of them are zero regardless of sign.
 *
 * * `-0` and `+0` are equal.
 * * `NaN` and `NaN` are equal.
 * @summary Reimplements ECMASCript's `SameValueZero`
 * @param x
 * @param y
 */
export function sameValueZero(x: any, y: any): boolean {
  return x === y || Object.is(x, y)
}

export default sameValueZero
