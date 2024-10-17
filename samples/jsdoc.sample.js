function noJsDocs() {
    return false;
}
export function exportedNoJsDocs() {
    return noJsDocs();
}
export const one = 1;
export function badJsDocs(letter) {
    return letter.toLowerCase();
}
export function goodJsDocs(letter) {
    return letter.toUpperCase();
}
