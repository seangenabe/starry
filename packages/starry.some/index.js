"use strict";
const map = require("starry.map");
module.exports = function some(iterable, predicate = x => x) {
    for (let element of map(iterable, predicate)) {
        if (element) {
            return true;
        }
    }
    return false;
};
