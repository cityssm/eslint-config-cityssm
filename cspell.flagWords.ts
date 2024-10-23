import list1 from 'eslint-plugin-woke/lib/categories/LGBTQ.js'
import list2 from 'eslint-plugin-woke/lib/categories/gender.js'
import list3 from 'eslint-plugin-woke/lib/categories/profanity.js'
import list4 from 'eslint-plugin-woke/lib/categories/racism.js'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const unformattedWordLists = [...list1, ...list2, ...list3, ...list4] as Array<{
  description: string
  words: Array<string | string[]>
}>

const wordListSet = new Set<string>()

for (const unformattedWordList of unformattedWordLists) {
  for (const word of unformattedWordList.words) {
    if (typeof word === 'string') {
      wordListSet.add(word)
    } else {
      wordListSet.add(word.join(''))
    }
  }
}

/**
 * Words that will be flagged as not allowed.
 */
export const flagWords = [...wordListSet]

export default flagWords
