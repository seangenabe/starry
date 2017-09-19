declare function setEquals<T1 = any>(iterable: Iterable<T1>): boolean;
declare function setEquals<T1 = any, T2 = any>(i1: Iterable<T1>, i2: Iterable<T2>): boolean;
declare function setEquals<T1 = any, T2 = any, T3 = any>(i1: Iterable<T1>, i2: Iterable<T2>, i3: Iterable<T3>): boolean;
declare function setEquals<TAll = any>(...iterables: Iterable<TAll>[]): boolean;
export = setEquals;
