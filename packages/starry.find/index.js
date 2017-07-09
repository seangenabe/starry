"use strict";
const filter = require("starry.filter");
const first = require("starry.first");
module.exports = function find(iterable, predicate) {
    return first(filter(iterable, predicate));
};
