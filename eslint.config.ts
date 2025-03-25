// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @cspell/spellchecker, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import eslintCspell from '@cspell/eslint-plugin'
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintCss from '@eslint/css'
import eslintJs from '@eslint/js'
import eslintJson from '@eslint/json'
import eslintMarkdown from '@eslint/markdown'
import eslintConfigLove from 'eslint-config-love'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets'
import eslintPluginNoUnsanitized from 'eslint-plugin-no-unsanitized'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import * as eslintPluginRegexp from 'eslint-plugin-regexp'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginSonarJs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
// import * as eslintPluginWoke from 'eslint-plugin-woke'
import * as eslintPluginWriteGoodComments from 'eslint-plugin-write-good-comments'
import tseslint from 'typescript-eslint'

import cspellFlagWords from './lists/cspell.flagWords.js'
import cspellWords from './lists/cspell.words.js'
import noMagicNumbers, { httpErrors } from './lists/noMagicNumbers.ignore.js'
import writeGoodCommentsWhitelist from './lists/writeGoodComments.whitelist.js'

export const config = tseslint.config(
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,

      eslintJs.configs.recommended,

      eslintPluginEslintComments.recommended,
      eslintPluginJsdoc.configs['flat/recommended-typescript'],
      eslintPluginPerfectionist.configs['recommended-natural'],
      eslintPluginRegexp.configs['flat/recommended'],
      eslintPluginSecurity.configs.recommended,
      eslintPluginSonarJs.configs.recommended,
      eslintPluginUnicorn.configs.recommended,
      eslintConfigLove
    ],
    files: ['**/*.ts', '**/*.js'],
    ignores: ['**/*.d.ts'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 2022,
        project: true,
        sourceType: 'module'
      }
    },

    plugins: {
      '@cspell': eslintCspell,
      'no-secrets': eslintPluginNoSecrets,
      // sonarjs: eslintPluginSonarJs,
      // unicorn: eslintPluginUnicorn,
      // woke: eslintPluginWoke,
      'write-good-comments': eslintPluginWriteGoodComments
    },

    rules: {
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            flagWords: cspellFlagWords,
            language: 'en-CA,en-US,en-GB',
            words: cspellWords
          }
        }
      ],

      '@typescript-eslint/init-declarations': 'warn',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: noMagicNumbers
        }
      ],
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',

      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-type-assertion': 'warn',

      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'warn',

      complexity: [
        'warn',
        {
          max: 20
        }
      ],

      'eslint-comments/require-description': 'off',

      'jsdoc/require-jsdoc': ['warn', { publicOnly: true }],

      'n/no-missing-import': 'off',

      'no-extra-semi': 'off',

      'no-secrets/no-secrets': 'error',
      'no-undef': 'off',

      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            ['external', 'internal-type', 'internal'],
            ['parent-type', 'parent'],
            ['sibling-type', 'sibling'],
            'unknown'
          ]
        }
      ],
      'perfectionist/sort-modules': 'warn',
      'perfectionist/sort-named-exports': [
        'error',
        {
          groupKind: 'types-first'
        }
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          groupKind: 'types-first'
        }
      ],
      'perfectionist/sort-objects': [
        'warn',
        {
          partitionByNewLine: true
        }
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: ['unknown', 'nullish']
        }
      ],

      // checked by "no-useless-escape"
      'regexp/no-useless-escape': 'off',

      // checked by "complexity"
      'sonarjs/cognitive-complexity': 'off',

      // checked by "regexp/no-dupe-characters-character-class"
      'sonarjs/duplicates-in-character-class': 'off',

      'sonarjs/no-duplicate-string': 'warn',
      // checked by "@typescript-eslint/no-misused-promises"
      'sonarjs/no-misused-promises': 'off',

      // checked by "@typescript-eslint/no-redundant-type-constituents"
      'sonarjs/no-redundant-type-constituents': 'off',

      'sonarjs/unnecessary-character-escapes': 'off',

      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/empty-brace-spaces': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
          ignore: ['DB', 'URL']
        }
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            def: {
              definition: true
            },
            ele: {
              element: true
            },
            eles: {
              elements: true
            },
            fns: {
              functions: true
            },
            res: {
              result: false
            },
            temp: {
              temporary: false
            }
          }
        }
      ],

      // 'woke/all': 'error',

      'write-good-comments/write-good-comments': [
        'warn',
        {
          passive: false,
          whitelist: writeGoodCommentsWhitelist
        }
      ]
    }
  },
  {
    extends: [eslintJson.configs.recommended],
    files: ['**/*.json'],
    ignores: ['**/package-lock.json'],
    language: 'json/json',
    plugins: {
      json: eslintJson
    }
  },
  {
    extends: [eslintMarkdown.configs.recommended],
    files: ['**/*.md'],
    language: 'markdown/gfm',
    plugins: {
      markdown: eslintMarkdown
    }
  }
)

export const configWebApp = tseslint.config(
  config,
  {
    files: ['**/*.ts', '**/*.js'],
    ignores: ['**/*.d.ts'],
    plugins: {
      'no-unsanitized': eslintPluginNoUnsanitized
    },
    rules: {
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [...noMagicNumbers, ...httpErrors]
        }
      ],

      'jsdoc/require-jsdoc': 'off',

      'no-unsanitized/method': [
        'error',
        {
          escape: {
            methods: ['cityssm.escapeHTML']
          }
        }
      ],

      'no-unsanitized/property': [
        'error',
        {
          escape: {
            methods: ['cityssm.escapeHTML']
          }
        }
      ]
    }
  },
  {
    extends: [eslintCss.configs.recommended],
    files: ['**/*.css'],
    language: 'css/css',
    plugins: {
      css: eslintCss
    }
  }
)

export { default as cspellFlagWords } from './lists/cspell.flagWords.js'
export { default as cspellWords } from './lists/cspell.words.js'

export {
  httpErrors as noMagicNumbersHttpErrors,
  default as noMagicNumbersIgnore
} from './lists/noMagicNumbers.ignore.js'

export { default as writeGoodCommentsWhitelist } from './lists/writeGoodComments.whitelist.js'

export { type Config, default as tseslint } from 'typescript-eslint'

export default config
