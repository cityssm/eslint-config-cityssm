import eslint from '@eslint/js';
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import eslintConfigLove from 'eslint-config-love';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets';
import eslintPluginNoUnsanitized from 'eslint-plugin-no-unsanitized';
import * as eslintPluginRegexp from 'eslint-plugin-regexp';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
export const config = tseslint.config(
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
eslint.configs.recommended, ...tseslint.configs.recommended, eslintPluginEslintComments.recommended, eslintPluginJsdoc.configs['flat/recommended-typescript'], eslintPluginRegexp.configs['flat/recommended'], 
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
eslintPluginSecurity.configs.recommended, 
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
eslintPluginSonarjs.configs.recommended, 
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
eslintPluginUnicorn.configs['flat/recommended'], eslintConfigLove, {
    languageOptions: {
        parserOptions: {
            ecmaFeatures: { modules: true },
            ecmaVersion: 2022,
            project: ['./tsconfig.json'],
            sourceType: 'module'
        }
    },
    plugins: {
        'no-secrets': eslintPluginNoSecrets
    },
    rules: {
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none'
                },
                singleline: {
                    delimiter: 'semi'
                }
            }
        ],
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
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
        ]
    }
});
export const configWebApp = tseslint.config(...config, {
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
});
export default config;
