import list1 from 'eslint-plugin-woke/lib/categories/LGBTQ.js';
import list2 from 'eslint-plugin-woke/lib/categories/gender.js';
import list3 from 'eslint-plugin-woke/lib/categories/profanity.js';
import list4 from 'eslint-plugin-woke/lib/categories/racism.js';
import { words } from './cspell.words.js';
const unformattedWordLists = [...list1, ...list2, ...list3, ...list4];
const wordListSet = new Set();
for (const unformattedWordList of unformattedWordLists) {
    for (const word of unformattedWordList.words) {
        if (typeof word === 'string') {
            wordListSet.add(word);
        }
        else {
            wordListSet.add(word.join(''));
        }
    }
}
for (const wordToRemove of words) {
    wordListSet.delete(wordToRemove);
}
export const flagWords = [...wordListSet];
export default flagWords;
