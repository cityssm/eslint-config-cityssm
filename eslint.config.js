import eslintCss from '@eslint/css';
import eslintHtml from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import eslintPluginBrowserSecurity from 'eslint-plugin-browser-security';
import eslintPluginExpressSecurity from 'eslint-plugin-express-security';
import { defineConfig } from 'eslint/config';
import packageConfig from './eslint.packageConfig.js';
import noMagicNumbers, { httpStatusCodes } from './lists/noMagicNumbers.ignore.js';
const baselineYear = 2024;
const htmlEslintRulesConfig = {
    'html/attrs-newline': ['warn', { ifAttrsMoreThan: 3 }],
    'html/head-order': 'error',
    'html/indent': ['warn', 2],
    'html/lowercase': 'error',
    'html/no-duplicate-class': 'error',
    'html/no-duplicate-in-head': 'error',
    'html/no-extra-spacing-tags': [
        'error',
        {
            disallowInAssignment: true,
            disallowMissing: true,
            disallowTabs: true,
            enforceBeforeSelfClose: true
        }
    ],
    'html/no-ineffective-attrs': 'error',
    'html/no-invalid-entity': 'error',
    'html/no-trailing-spaces': 'error',
    'html/require-button-type': 'error',
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
    'html/use-baseline': [
        'warn',
        {
            available: baselineYear
        }
    ]
};
/**
 * ESLint Configuration for Web Applications
 */
export const config = defineConfig(packageConfig, {
    files: ['**/*.ts'],
    ignores: ['**/*.d.ts'],
    extends: [
        'html/recommended',
        eslintPluginBrowserSecurity.configs.recommended,
        eslintPluginExpressSecurity.configs.recommended
    ],
    plugins: {
        html: eslintHtml
    },
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
        ]
    }
}, {
    files: ['**/*.css'],
    extends: [eslintCss.configs.recommended],
    language: 'css/css',
    rules: {
        'css/use-baseline': [
            'warn',
            {
                available: baselineYear
            }
        ]
    }
}, {
    files: ['**/*.ejs', '**/*.html'],
    extends: ['html/recommended'],
    language: 'html/html',
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
    plugins: {
        html: eslintHtml
    },
    rules: {
        ...htmlEslintRulesConfig
    }
});
export default config;
export { defineConfig } from 'eslint/config';
