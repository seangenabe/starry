"use strict";
const generatorToIterable = require("starry.generator-to-iterable");
const iteratorToIterable = require("starry.iterator-to-iterable");
const take = require("starry.take");
module.exports = function skip(iterable, count = 1) {
    if (!Number.isFinite(count)) {
        throw new Error("Argument `count` must be finite.");
    }
    if (count <= 0) {
        return iterable;
    }
    if (iterable instanceof Array) {
        return iterable.slice(count);
    }
    return generatorToIterable(function* skipGenerator() {
        let iterator = iterable[Symbol.iterator]();
        let iterableWrap = iteratorToIterable(iterator);
        for (let skippedValue of take(iterableWrap, count)) {
            // consume values
        }
        yield* iterableWrap;
    });
};
