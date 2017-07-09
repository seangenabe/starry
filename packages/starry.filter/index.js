"use strict";
const generatorToIterable = require("starry.generator-to-iterable");
module.exports = function filter(iterable, predicate = x => x) {
    if (typeof predicate !== 'function') {
        throw new TypeError("Argument `predicate` is not a function.");
    }
    return generatorToIterable(function* filterGenerator() {
        for (let element of iterable) {
            if (predicate(element)) {
                yield element;
            }
        }
    });
};
