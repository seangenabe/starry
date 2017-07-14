declare namespace ArrayTypes {
    type ArrayLikeConstructor = ArrayConstructor | Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor;
    type ArrayLike = Array<any> | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
}
declare const ArrayTypes: Set<ArrayTypes.ArrayLikeConstructor>;
export = ArrayTypes;
