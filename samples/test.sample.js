"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const node_test_1 = require("node:test");
assert_1.default.strictEqual(1 + 1, 2);
(0, node_test_1.describe)('basic arithmetic', () => {
    (0, node_test_1.it)('should add numbers correctly', () => {
        (0, assert_1.default)(1 + 1 == 2);
    });
});
