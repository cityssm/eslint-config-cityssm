function capitalize(lowercaseString) {
    return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
}
const whitelistLowercase = [
    'only',
    'purchase',
    'maximum',
    'minimum',
    'successfully',
    'validate'
];
export const whitelist = [...whitelistLowercase];
for (const word of whitelistLowercase) {
    whitelist.push(capitalize(word));
}
export default whitelist;
