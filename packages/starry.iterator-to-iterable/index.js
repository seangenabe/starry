"use strict";
module.exports = function iteratorToIterable(iterator) {
    if (iterator == null || typeof iterator.next !== 'function') {
        throw new TypeError("Argument `iterator` is not an iterator.");
    }
    let obj = {
        [Symbol.iterator]() {
            return obj;
        },
        next() {
            return iterator.next();
        }
    };
    return obj;
};
