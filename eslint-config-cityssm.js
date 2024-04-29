/* eslint-disable unicorn/filename-case, unicorn/prefer-module, eslint-comments/disable-enable-pair */
module.exports = {
    root: true,
    env: {
        es6: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'eslint-comments',
        'import',
        'jsdoc',
        'n',
        'no-secrets',
        'no-unsanitized',
        'regexp',
        'security',
        'sonarjs',
        'unicorn'
    ],
    extends: [
        'eslint:recommended',
        'love',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsdoc/recommended',
        'plugin:n/recommended',
        'plugin:no-unsanitized/DOM',
        'plugin:promise/recommended',
        'plugin:regexp/recommended',
        'plugin:security/recommended-legacy',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
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
};
