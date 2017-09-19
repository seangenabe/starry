declare function reduce<T = any>(iterable: Iterable<T>, accumulator: (previousValue: T, currentValue: T) => T): T;
declare function reduce<T = any, U = any>(iterable: Iterable<T>, accumulator: (previousValue: U, currentValue: T) => U, initialValue: U): U;
export = reduce;
