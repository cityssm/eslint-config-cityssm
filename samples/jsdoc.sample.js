"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one = void 0;
exports.exportedNoJsDocs = exportedNoJsDocs;
exports.badJsDocs = badJsDocs;
exports.goodJsDocs = goodJsDocs;
function noJsDocs() {
    return false;
}
function exportedNoJsDocs() {
    return noJsDocs();
}
exports.one = 1;
function badJsDocs(letter) {
    return letter.toLowerCase();
}
function goodJsDocs(letter) {
    return letter.toUpperCase();
}
