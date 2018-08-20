import { inspect } from 'util'
import { generatorToIterable } from 'starry.generator-to-iterable'

const BENCHMARK_RUNS = 1e6

function runBenchmark(name: string, fn: () => Iterable<number>) {
  const start = process.hrtime['bigint']()
  for (let i = 0; i < BENCHMARK_RUNS; i++) {
    try {
      const result = [...fn()]
      const expected = [5, 6, 7, 8, 9]
      for (let i = 0; i < 5; i++) {
        if (result[i] !== expected[i]) {
          console.log(`${name}: returned ${inspect(result)}`)
          return
        }
      }
    } catch (err) {
      console.log(`${name}: ${err.message}`)
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

const arr = Array.from({ length: 10 }, (_, i) => i)
const ali = {
  length: 10,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}
const ta = new Uint8Array(arr)

runBenchmark('array-like > generator', () => {
  return generatorToIterable(function* arrayLikeSkipGenerator() {
    const i = 5
    for (let i = 5; i < ali.length; i++) {
      yield ali[i]
    }
  })
})

runBenchmark('array-like > Array.from', () => {
  const arr = Array.from(ali)
  return arr.slice(5)
})

runBenchmark('array > generator', () => {
  return generatorToIterable(function* arrayGenerator() {
    const i = 5
    for (let i = 5; i < arr.length; i++) {
      yield arr[i]
    }
  })
})

runBenchmark('array > Array.from', () => {
  const a = Array.from(arr)
  return a.slice(5)
})

runBenchmark('array > slice', () => {
  return arr.slice(5)
})

runBenchmark('typed array > generator', () => {
  return generatorToIterable(function* typedArraySkipGenerator() {
    const i = 5
    for (let i = 5; i < ta.length; i++) {
      yield ta[i]
    }
  })
})

runBenchmark('typed array > Array.from', () => {
  const a = Array.from(ta)
  return a.slice(5)
})

runBenchmark('typed array > slice', () => {
  return ta.slice(5)
})
