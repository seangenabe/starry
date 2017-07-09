"use strict";
module.exports = function bound(fn) {
    return function boundFunction(...args) {
        return fn(this, ...args);
    };
};
