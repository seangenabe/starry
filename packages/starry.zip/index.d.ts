declare function zip<T1>(iterable: Iterable<T1>): Iterable<[T1]>;
declare function zip<T1, T2>(i1: Iterable<T1>, i2: Iterable<T2>): Iterable<[T1 | undefined, T2 | undefined]>;
declare function zip<T1, T2, T3>(i1: Iterable<T1>, i2: Iterable<T2>, i3: Iterable<T3>): Iterable<[T1 | undefined, T2 | undefined, T3 | undefined]>;
export = zip;
