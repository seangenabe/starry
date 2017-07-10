"use strict";
const arrayTypes = require("starry._array-types");
function size(iterable = []) {
    let C = iterable.constructor;
    if (arrayTypes.has(C)) {
        return iterable.length;
    }
    if (iterable.constructor === Set || iterable.constructor === Map) {
        return iterable.size;
    }
    if (typeof iterable === 'string') {
        return iterable.length;
    }
    let ret = 0;
    for (let element of iterable) {
        ret++;
    }
    return ret;
}
module.exports = size;
