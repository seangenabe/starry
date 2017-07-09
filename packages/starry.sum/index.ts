import reduce from 'starry.reduce'

export default function sum(
  iterable: Iterable<number>
): number {

  return reduce(
    iterable,
    function sumAccumulator(a, b) {
      return a + Number(b)
    },
    0
  )
}
