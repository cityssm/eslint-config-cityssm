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
        'n',
        'regexp',
        'sonarjs',
        'unicorn'
    ],
    extends: [
        'eslint:recommended',
        'standard-with-typescript',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:n/recommended',
        'plugin:promise/recommended',
        'plugin:regexp/recommended',
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
        'sonarjs/cognitive-complexity': ['warn', 20],
        'sonarjs/no-duplicate-string': 'warn',
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
