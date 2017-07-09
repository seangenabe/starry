"use strict";
module.exports = function sameValueZero(x, y) {
    return x === y || Object.is(x, y);
};
