import eslintHtml from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import eslintPluginBrowserSecurity from 'eslint-plugin-browser-security';
import eslintPluginExpressSecurity from 'eslint-plugin-express-security';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import packageConfig from './eslint.packageConfig.js';
import noMagicNumbers, { httpStatusCodes } from './lists/noMagicNumbers.ignore.js';
const baselineYear = 2024;
const htmlEslintRulesConfig = {
    '@html-eslint/attrs-newline': ['warn', { ifAttrsMoreThan: 3 }],
    '@html-eslint/head-order': 'error',
    '@html-eslint/indent': ['warn', 2],
    '@html-eslint/lowercase': 'error',
    '@html-eslint/no-duplicate-class': 'error',
    '@html-eslint/no-duplicate-in-head': 'error',
    '@html-eslint/no-extra-spacing-tags': [
        'error',
        {
            disallowInAssignment: true,
            disallowMissing: true,
            disallowTabs: true,
            enforceBeforeSelfClose: true
        }
    ],
    '@html-eslint/no-ineffective-attrs': 'error',
    '@html-eslint/no-inline-styles': 'warn',
    '@html-eslint/no-invalid-entity': 'error',
    '@html-eslint/no-trailing-spaces': 'error',
    '@html-eslint/require-button-type': 'error',
    '@html-eslint/require-closing-tags': [
        'error',
        {
            selfClosing: 'always'
        }
    ],
    '@html-eslint/sort-attrs': [
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
    '@html-eslint/use-baseline': [
        'warn',
        {
            available: baselineYear
        }
    ]
};
/**
 * ESLint Configuration for Web Applications
 */
export default defineConfig([
    packageConfig,
    {
        files: ['**/*.ts'],
        extends: [
            eslintPluginBrowserSecurity.configs.recommended,
            eslintPluginExpressSecurity.configs.recommended
        ],
        plugins: { '@html-eslint': eslintHtml },
        rules: {
            ...htmlEslintRulesConfig,
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
        files: ['**/database/**/*.ts'],
        rules: {
            '@typescript-eslint/no-restricted-types': 'off',
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
        files: ['**/public/javascripts/**/*.ts'],
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
        plugins: { '@html-eslint': eslintHtml, unicorn: eslintPluginUnicorn },
        rules: {
            ...htmlEslintRulesConfig,
            'unicorn/filename-case': 'warn'
        }
    }
]);
export { defineConfig } from 'eslint/config';
