import flagWords from './cspell.flagWords.js';
import words from './cspell.words.js';
export declare const config: import("@typescript-eslint/utils/ts-eslint").FlatConfig.ConfigArray;
export declare const configWebApp: import("@typescript-eslint/utils/ts-eslint").FlatConfig.ConfigArray;
export { default as tseslint, type Config } from 'typescript-eslint';
export { words as cspellWords, flagWords as cspellFlagWords };
export default config;
