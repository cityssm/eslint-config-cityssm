"use strict";
/* eslint-disable unicorn/prevent-abbreviations */
Object.defineProperty(exports, "__esModule", { value: true });
exports.one = void 0;
exports.exportedNoJsDocs = exportedNoJsDocs;
exports.badJsDocs = badJsDocs;
exports.goodJsDocs = goodJsDocs;
function noJsDocs() {
    // No JS Doc error
    return false;
}
function exportedNoJsDocs() {
    // No JS Doc error
    return noJsDocs();
}
exports.one = 1;
/**
 *
 * @param letter
 */
function badJsDocs(letter) {
    return letter.toLowerCase();
}
/**
 * Makes a letter upper case.
 * @param {string} letter Either upper or lower case.
 * @returns {string} Upper case letter
 */
function goodJsDocs(letter) {
    return letter.toUpperCase();
}
