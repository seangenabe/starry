"use strict";
const map = require("starry.map");
module.exports = function every(iterable, predicate = x => x) {
    for (let element of map(iterable, predicate)) {
        if (!element) {
            return false;
        }
    }
    return true;
};
