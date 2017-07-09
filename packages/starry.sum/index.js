"use strict";
const reduce = require("starry.reduce");
module.exports = function sum(iterable) {
    return reduce(iterable, (a, b) => a + Number(b), 0);
};
