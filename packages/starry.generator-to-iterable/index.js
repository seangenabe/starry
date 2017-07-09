"use strict";
module.exports = function generatorToIterable(generatorFn) {
    return {
        [Symbol.iterator]() {
            return generatorFn();
        }
    };
};
