import { inspect } from 'util'

const ARRAY_SIZE = 1e5
const BENCHMARK_RUNS = 1e3

function runBenchmark(name: string, fn: () => number | undefined) {
  const start = process.hrtime['bigint']()
  for (let i = 0; i < BENCHMARK_RUNS; i++) {
    const result = fn()
    if (result !== ARRAY_SIZE - 1) {
      console.log(`${name.padEnd(25)}: returned ${inspect(result)}`)
      return
    }
  }

  const end = process.hrtime['bigint']()
  const ns = Number(end - start)
  const ms = ns / 1e6
  const secs = ms / 1000
  const opsPerSec = 1000 / secs

  const s1 = `${name}:`
  const s2 = `${ms}ms`
  const s3 = `(${opsPerSec} ops/s)`

  console.log(`${s1.padEnd(25)}${s2.padEnd(15)}${s3}`)
}

const array = Array.from({ length: ARRAY_SIZE }, (_, i) => i)
const set = new Set(array)
const map = new Map(array.map(x => [x, x] as [number, number]))

runBenchmark('set > iterate', () => {
  let last: number | undefined = undefined
  for (const item of set) {
    last = item
  }
  return last
})

runBenchmark('set > Array.from', () => {
  const a = Array.from(set)
  const len = a.length
  if (len === 0) {
    return undefined
  }
  return a[len - 1]
})

runBenchmark('set > spread', () => {
  const a = [...set]
  const len = a.length
  if (len === 0) {
    return undefined
  }
  return a[len - 1]
})

runBenchmark('map > iterate', () => {
  let last: [number, number] | undefined = undefined
  for (const item of map) {
    last = item
  }
  return last && last[1]
})

runBenchmark('map > Array.from', () => {
  const a = Array.from(map)
  const len = a.length
  if (len === 0) {
    return undefined
  }
  return a[len - 1][1]
})

runBenchmark('map > spread', () => {
  const a = [...map]
  const len = a.length
  if (len === 0) {
    return undefined
  }
  return a[len - 1][1]
})
