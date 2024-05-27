/* eslint-disable unicorn/prevent-abbreviations */
function noJsDocs() {
    // No JS Doc error
    return false;
}
export function exportedNoJsDocs() {
    // No JS Doc error
    return noJsDocs();
}
export const one = 1;
/**
 *
 * @param letter
 */
export function badJsDocs(letter) {
    return letter.toLowerCase();
}
/**
 * Makes a letter upper case.
 * @param {string} letter Either upper or lower case.
 * @returns {string} Upper case letter
 */
export function goodJsDocs(letter) {
    return letter.toUpperCase();
}
