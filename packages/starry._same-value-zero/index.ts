export default function sameValueZero(
  x: any,
  y: any
): boolean {

  return x === y || Object.is(x, y)
}
