// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @cspell/spellchecker, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import eslintCspell from '@cspell/eslint-plugin/recommended'
import eslint from '@eslint/js'
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintConfigLove from 'eslint-config-love'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets'
import eslintPluginNoUnsanitized from 'eslint-plugin-no-unsanitized'
import * as eslintPluginRegexp from 'eslint-plugin-regexp'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginSonarJs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import * as eslintPluginWoke from 'eslint-plugin-woke'
import * as eslintPluginWriteGoodComments from 'eslint-plugin-write-good-comments'
import tseslint from 'typescript-eslint'

import flagWords from './cspell.flagWords.js'
import words from './cspell.words.js'

export const config = tseslint.config(
  eslint.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  eslintCspell,
  eslintPluginEslintComments.recommended,

  eslintPluginJsdoc.configs['flat/recommended-typescript'],
  eslintPluginRegexp.configs['flat/recommended'],

  eslintPluginSecurity.configs.recommended,
  eslintPluginSonarJs.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],

  eslintConfigLove,

  {
    files: ['**/*.ts'],
    ignores: ['**/*.d.ts'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { modules: true },
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        ecmaVersion: 2022,
        project: ['./tsconfig.json'],
        sourceType: 'module'
      }
    },
    plugins: {
      'no-secrets': eslintPluginNoSecrets,
      woke: eslintPluginWoke,
      'write-good-comments': eslintPluginWriteGoodComments
    },
    rules: {
      '@cspell/spellchecker': [
        'warn', {
          cspell: {
            language: 'en-CA,en-US,en-GB',
            flagWords,
            words
          }
        }
      ],
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-magic-numbers': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'warn',

      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc'
          }
        }
      ],

      'jsdoc/require-jsdoc': ['warn', { publicOnly: true }],

      'n/no-missing-import': 'off',

      'no-extra-semi': 'off',
      'no-secrets/no-secrets': 'error',

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      'sonarjs/cognitive-complexity': ['warn', 20],
      'sonarjs/no-duplicate-string': 'warn',

      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true
        }
      ],

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

      'woke/all': 'error',

      'write-good-comments/write-good-comments': [
        'warn',
        {
          passive: false,
          // eslint-disable-next-line woke/all
          whitelist: ['only', 'validate']
        }
      ]
    }
  }
)

export const configWebApp = tseslint.config(...config, {
  files: ['**/*.ts'],
  ignores: ['**/*.d.ts'],
  plugins: {
    'no-unsanitized': eslintPluginNoUnsanitized
  },
  rules: {
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
})

export { default as tseslint, type Config } from 'typescript-eslint'

export default config
