/* eslint-disable unicorn/prevent-abbreviations */

function noJsDocs(): boolean {
  // No JS Doc error
  return false
}

export function exportedNoJsDocs(): boolean {
  // No JS Doc error
  return noJsDocs()
}

export const one = 1

/**
 *
 * @param letter
 */
export function badJsDocs(letter: string): string {
  return letter.toLowerCase()
}

/**
 * Makes a letter upper case.
 * @param {string} letter Either upper or lower case.
 * @returns {string} Upper case letter
 */
export function goodJsDocs(letter: string): string {
  return letter.toUpperCase()
}
