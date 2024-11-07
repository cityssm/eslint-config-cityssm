// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @cspell/spellchecker */
function capitalize(lowercaseString) {
    return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
}
const whitelistLowercase = ['only', 'validate'];
/**
 * Words that will not be flagged by write-good-comments.
 */
export const whitelist = [...whitelistLowercase];
// List is case-sensitive, include words starting with capitals.
for (const word of whitelist) {
    whitelist.push(capitalize(word));
}
export default whitelist;
