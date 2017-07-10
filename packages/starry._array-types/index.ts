namespace ArrayTypes {
  export type ArrayLikeConstructor =
    ArrayConstructor |
    Int8ArrayConstructor |
    Uint8ArrayConstructor |
    Uint8ClampedArrayConstructor |
    Int16ArrayConstructor |
    Uint16ArrayConstructor |
    Int32ArrayConstructor |
    Uint32ArrayConstructor |
    Float32ArrayConstructor |
    Float64ArrayConstructor

  export type ArrayLike =
    Array<any> |
    Int8Array |
    Uint8Array |
    Uint8ClampedArray |
    Int16Array |
    Uint16Array |
    Int32Array |
    Uint32Array |
    Float32Array |
    Float64Array
}

const ArrayTypes = new Set([
  Array,
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
]) as Set<ArrayTypes.ArrayLikeConstructor>

export = ArrayTypes