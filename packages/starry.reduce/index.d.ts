declare function reduce<T>(iterable: Iterable<T>, accumulator: (previousValue: T, currentValue: T) => T): T;
declare function reduce<T, U>(iterable: Iterable<T>, accumulator: (previousValue: U, currentValue: T) => U, initialValue: U): U;
export = reduce;
