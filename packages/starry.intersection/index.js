"use strict";
const starry_every_1 = require("starry.every");
const starry_filter_1 = require("starry.filter");
const starry_generator_to_iterable_1 = require("starry.generator-to-iterable");
const starry_includes_1 = require("starry.includes");
const starry__array_types_1 = require("starry._array-types");
function intersection(...iterables) {
    if (!iterables.length) {
        return [];
    }
    let first = new Set(iterables.shift());
    iterables = iterables.map(iterable => {
        const C = iterable.constructor;
        if (starry__array_types_1.arrayTypes.has(C) || C === Set) {
            return new Set(iterable);
        }
        return iterable;
    });
    return starry_generator_to_iterable_1.generatorToIterable(function* intersectionGenerator() {
        yield* starry_filter_1.filter(first, element1 => {
            return starry_every_1.every(iterables, iterable => {
                return starry_includes_1.includes(iterable, element1);
            });
        });
    });
}
module.exports = intersection;
//# sourceMappingURL=index.js.map