"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const ava_1 = require("ava");
ava_1.default('check array types', t => {
    for (let arrayType of _1.arrayTypes) {
        t.true(typeof arrayType.prototype.slice === 'function');
    }
});
//# sourceMappingURL=test.js.map