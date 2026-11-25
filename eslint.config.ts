import htmlParser from '@html-eslint/parser'
import eslintPluginBrowserSecurity from 'eslint-plugin-browser-security'
import eslintPluginExpressSecurity from 'eslint-plugin-express-security'
import { defineConfig } from 'eslint/config'

import packageConfig from './eslint.packageConfig.js'
import noMagicNumbers, {
  httpStatusCodes
} from './lists/noMagicNumbers.ignore.js'

const baselineYear = 2024

/**
 * ESLint Configuration for Web Applications
 */
export default defineConfig([
  packageConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    ignores: ['**/*.d.ts'],

    extends: [
      eslintPluginBrowserSecurity.configs.recommended,
      eslintPluginExpressSecurity.configs.recommended
    ],
    rules: {
      '@typescript-eslint/init-declarations': 'off',

      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [...noMagicNumbers, ...httpStatusCodes]
        }
      ],

      'jsdoc/require-jsdoc': 'off',

      'browser-security/no-innerhtml': [
        'error',
        {
          trustedSanitizers: ['cityssm.escapeHTML']
        }
      ],

      'unicorn/consistent-boolean-name': [
        'error',
        {
          ignore: ['success']
        }
      ]
    }
  },
  {
    files: ['**/database/**/*.ts', '**/database/**/*.js'],
    rules: {
      'unicorn/consistent-boolean-name': [
        'warn',
        {
          checkFunctions: 'never'
        }
      ],
      'unicorn/no-null': 'off'
    }
  },
  {
    files: ['**/public/javascripts/**/*.ts', '**/public/javascripts/**/*.js'],
    rules: {
      'max-lines': 'off',
      'runtime-cleanup/no-unmanaged-event-listeners': 'off',
      'unicorn/no-non-function-verb-prefix': 'off'
    }
  },
  {
    files: ['**/*.css'],
    rules: {
      'css/use-baseline': [
        'warn',
        {
          available: baselineYear
        }
      ],

      'unicorn/indent': [
        'error',
        {
          indent: 2
        }
      ],
      'unicorn/no-empty-file': 'error',
      'unicorn/no-transition-all': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/number-literal-case': 'error'
    }
  },
  {
    files: ['**/*.ejs', '**/*.html'],

    languageOptions: {
      parser: htmlParser,
      parserOptions: {
        templateEngineSyntax: {
          '<%': '%>',
          '<%-': '%>',
          '<%=': '%>'
        }
      }
    },
    rules: {}
  }
])

export { type Config, defineConfig } from 'eslint/config'
