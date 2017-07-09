"use strict";
function setEquals(...iterables) {
    if (iterables.length <= 1) {
        return true;
    }
    const first = new Set(iterables.shift());
    const rest = iterables.map(c => new Set(c));
    for (let x of first) {
        for (let other of rest) {
            if (other.has(x)) {
                other.delete(x);
            }
            else {
                return false;
            }
        }
    }
    return rest.every(other => other.size === 0);
}
module.exports = setEquals;
