"use strict";
const arrayTypes = require("starry._array-types");
function last(iterable = []) {
    if (arrayTypes.has(iterable.constructor)) {
        let len = iterable.length;
        if (len === 0) {
            return undefined;
        }
        return iterable[len - 1];
    }
    let item;
    for (item of iterable) {
        // consume items
    }
    return item;
}
module.exports = last;
