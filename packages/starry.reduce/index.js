"use strict";
const iteratorToIterable = require("starry.iterator-to-iterable");
function reduce(iterable, accumulator, ...a) {
    if (typeof accumulator !== 'function') {
        throw new TypeError("Argument `accumulator` is not a function.");
    }
    let currentValue;
    let iterator = iterable[Symbol.iterator]();
    let iterableWrap = iteratorToIterable(iterator);
    if (a.length) {
        [currentValue] = a;
    }
    else {
        let hasAny = false;
        for (let element of iterableWrap) {
            currentValue = element;
            hasAny = true;
            break;
        }
        if (!hasAny) {
            throw new TypeError("Reduce of empty iterable with no initial value.");
        }
    }
    for (let element of iterableWrap) {
        currentValue = accumulator(currentValue, element);
    }
    return currentValue;
}
module.exports = reduce;
