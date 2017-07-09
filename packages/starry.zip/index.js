"use strict";
const generatorToIterable = require("starry.generator-to-iterable");
function zip(...iterables) {
    const iterators = iterables.map(c => c[Symbol.iterator]());
    const iteratorEnded = iterators.map(() => false);
    return generatorToIterable(function* zipGenerator() {
        do {
            let allDone = true;
            const result = iterators.map((iterator, i) => {
                if (iteratorEnded[i]) {
                    return { done: true, value: undefined };
                }
                const { done, value } = iterator.next();
                if (done) {
                    iteratorEnded[i] = true;
                }
                else {
                    allDone = false;
                }
                return { done, value };
            });
            if (allDone) {
                break;
            }
            yield result.map(r => r.value);
        } while (true);
    });
}
module.exports = zip;
