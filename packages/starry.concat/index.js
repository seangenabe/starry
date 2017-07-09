"use strict";
const generatorToIterable = require("starry.generator-to-iterable");
module.exports = function concat(...iterables) {
    return generatorToIterable(function* concatGenerator() {
        for (let iterable of iterables) {
            yield* iterable;
        }
    });
};
