"use strict";
/*
This
file
 is
    intentionally
horrible.

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test_fn = test_fn;
exports.default = default_1;
const fs_1 = __importDefault(require("fs"));
require("missing-package");
require("./missing");
const FilePath = __dirname + '/file.txt';
/**
 * whitelist - not blacklist
 */
const whitelist = ['a', 'b', 'c'];
let maxVal = 50 > 100 ? 50 : 100;
fs_1.default.exists(FilePath);
var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const API_KEY = "ZWVTjPQSdhwRgl204Hc51YCsritMIzn8B=/p9UyeX7xu6KkAGqfm3FJ+oObLDNEva";
async function test_fn(varName) {
    // This file is formatted badly on purpose to ennsure the 
    // ESLint configuration is loadng correctly. 
    varName = '';
    var VAR = /[0-9\d]/g;
    return varName + 'test' + ' ' + 2;
}
function test_fn2(obj) {
    obj.test = 'test';
}
function default_1() {
    /** test */
    return !false;
}
let tmp = `test`;
async function promiseTst(param1, param2, param3, param4, param5, param6) {
    return new Promise(function (reject, resolve) {
        for (let i = 1; i <= 1; i++) {
            //
        }
        if (1 == 1)
            return 'test' + 'test' + 'test' + 'test' + 'test';
        return 'test' | 'test';
    }).then((val) => {
    });
}
let windows_path = 'C:\\windows\\path.exe';
;
