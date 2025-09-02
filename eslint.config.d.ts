export declare const config: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
export declare const configWebApp: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
export { default as cspellFlagWords } from './lists/cspell.flagWords.js';
export { default as cspellWords } from './lists/cspell.words.js';
export { httpStatusCodes as noMagicNumbersHttpStatusCodes, default as noMagicNumbersIgnore } from './lists/noMagicNumbers.ignore.js';
export { default as writeGoodCommentsWhitelist } from './lists/writeGoodComments.whitelist.js';
export { defineConfig } from 'eslint/config';
export { type Config, default as tseslint } from 'typescript-eslint';
export default config;
