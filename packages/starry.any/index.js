"use strict";
function any(iterable = []) {
    for (let item of iterable) {
        return true;
    }
    return false;
}
module.exports = any;
