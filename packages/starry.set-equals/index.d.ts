declare function setEquals<T1>(iterable: Iterable<T1>): boolean;
declare function setEquals<T1, T2>(i1: Iterable<T1>, i2: Iterable<T2>): boolean;
declare function setEquals<T1, T2, T3>(i1: Iterable<T1>, i2: Iterable<T2>, i3: Iterable<T3>): boolean;
declare function setEquals<TAll>(...iterables: Iterable<TAll>[]): boolean;
export = setEquals;
