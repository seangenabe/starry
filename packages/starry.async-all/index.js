"use strict";
const map = require("starry.map");
module.exports = function asyncAll(iterable, asyncAction) {
    return Promise.all(map(iterable, asyncAction));
};
