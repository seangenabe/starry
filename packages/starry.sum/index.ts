import { reduce } from 'starry.reduce'

export function sum(iterable: Iterable<number>): number {
  return reduce(iterable, (a: number, b) => a + Number(b), 0)
}

export default sum
