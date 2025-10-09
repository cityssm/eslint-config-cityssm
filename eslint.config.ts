// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { ConfigObject } from '@eslint/core'
import eslintCss from '@eslint/css'
import eslintHtml from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import eslintPluginNoUnsanitized from 'eslint-plugin-no-unsanitized'
import { defineConfig } from 'eslint/config'

import packageConfig from './eslint.packageConfig.js'
import noMagicNumbers, {
  httpStatusCodes
} from './lists/noMagicNumbers.ignore.js'

/**
 * ESLint Configuration for Web Applications
 */
export const config: ConfigObject[] = defineConfig(
  packageConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    ignores: ['**/*.d.ts'],
    plugins: {
      html: eslintHtml,
      'no-unsanitized': eslintPluginNoUnsanitized
    },

    extends: ['html/recommended'],
    rules: {
      '@typescript-eslint/init-declarations': 'off',

      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [...noMagicNumbers, ...httpStatusCodes]
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
  },
  {
    files: ['**/*.ejs', '**/*.html'],
    language: 'html/html',
    plugins: {
      html: eslintHtml
    },

    languageOptions: {
      parser: htmlParser,
      parserOptions: {
        rawContentTags: ['%'],
        templateEngineSyntax: {
          '<%': '%>',
          '<%-': '%>',
          '<%=': '%>'
        }
      }
    },

    extends: ['html/recommended'],
    rules: {
      'html/attrs-newline': ['warn', { ifAttrsMoreThan: 3 }],
      'html/indent': ['warn', 2],
      'html/no-extra-spacing-attrs': [
        'error',
        {
          disallowInAssignment: true,
          disallowMissing: true,
          disallowTabs: true,
          enforceBeforeSelfClose: true
        }
      ],
      'html/require-closing-tags': [
        'error',
        {
          selfClosing: 'always'
        }
      ],
      'html/sort-attrs': [
        'warn',
        {
          // https://codeguide.co/#html-attribute-order
          priority: [
            // Identification
            'class',
            'id',
            'name',
            { pattern: 'data-.*' },

            // Unique to specific elements
            'src',
            'for',
            'type',
            'href',
            'value',
            'min',
            'max',
            'step',
            'minlength',
            'maxlength',

            // Accessibility
            'title',
            'alt',
            'role',
            { pattern: 'aria-.*' },
            'tabindex',

            // Style
            'placeholder',
            'rows',
            'style',

            // JavaScript
            { pattern: 'on.*' }
          ]
        }
      ],
      'html/use-baseline': 'warn'
    }
  }
)

export default config

export type { ConfigObject } from '@eslint/core'
export { defineConfig } from 'eslint/config'
