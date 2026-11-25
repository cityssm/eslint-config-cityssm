import eslintConfigXo from 'eslint-config-xo';
import eslintPluginNodeDependencies from 'eslint-plugin-node-dependencies';
import eslintPluginNodeSecurity from 'eslint-plugin-node-security';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginRuntimeCleanup from 'eslint-plugin-runtime-cleanup';
import eslintPluginSecureCoding from 'eslint-plugin-secure-coding';
import eslintPluginSonarJs from 'eslint-plugin-sonarjs';
import eslintPluginSqliteSecurity from 'eslint-plugin-sqlite-security';
import eslintPluginWriteGoodComments from 'eslint-plugin-write-good-comments-2';
import { defineConfig } from 'eslint/config';
import noMagicNumbers from './lists/noMagicNumbers.ignore.js';
import writeGoodCommentsAllowlist from './lists/writeGoodComments.allowlist.js';
/**
 * ESLint Configuration for General TypeScript/JavaScript Projects
 */
export default defineConfig([
    ...eslintConfigXo({
        prettier: 'compat',
        semicolon: false,
        space: true
    }),
    {
        ignores: ['**/*.d.ts']
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
            reportUnusedInlineConfigs: 'error'
        }
    },
    {
        files: ['**/*.ts', '**/*.js'],
        ignores: ['**/*.d.ts'],
        extends: [
            eslintPluginNodeSecurity.configs.recommended,
            eslintPluginPerfectionist.configs['recommended-natural'],
            eslintPluginPromise.configs['flat/recommended'],
            eslintPluginRuntimeCleanup.configs['recommended-type-checked'],
            eslintPluginSecureCoding.configs.recommended,
            eslintPluginSonarJs.configs.recommended,
            eslintPluginSqliteSecurity.configs.recommended
        ],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { modules: true },
                ecmaVersion: 2022,
                sourceType: 'module',
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: {
            'write-good-comments': eslintPluginWriteGoodComments
        },
        rules: {
            '@typescript-eslint/init-declarations': 'warn',
            '@typescript-eslint/no-magic-numbers': [
                'warn',
                {
                    ignore: noMagicNumbers
                }
            ],
            '@typescript-eslint/no-misused-promises': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-type-assertion': 'warn',
            '@typescript-eslint/non-nullable-type-assertion-style': 'off',
            '@typescript-eslint/prefer-destructuring': 'off',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/restrict-plus-operands': 'warn',
            '@typescript-eslint/space-before-function-paren': 'off',
            '@typescript-eslint/strict-boolean-expressions': 'warn',
            complexity: [
                'warn',
                {
                    max: 20
                }
            ],
            '@eslint-community/eslint-comments/require-description': 'off',
            'import-x/order': 'off',
            'jsdoc/require-asterisk-prefix': ['error', 'always'],
            'jsdoc/require-hyphen-before-param-description': 'error',
            'jsdoc/require-jsdoc': ['warn', { publicOnly: true }],
            'n/no-missing-import': 'off',
            'no-await-in-loop': 'warn',
            'no-console': 'warn',
            'no-extra-semi': 'off',
            'no-param-reassign': ['error', { props: false }],
            'node-test/no-async-describe': 'warn',
            'perfectionist/sort-imports': [
                'error',
                {
                    groups: [
                        'builtin',
                        ['external', 'internal'],
                        'parent',
                        'sibling',
                        'unknown'
                    ],
                    newlinesBetween: 1
                }
            ],
            'perfectionist/sort-interfaces': [
                'warn',
                {
                    partitionByNewLine: true
                }
            ],
            'perfectionist/sort-modules': [
                'warn',
                {
                    partitionByNewLine: true
                }
            ],
            'perfectionist/sort-named-exports': [
                'error',
                {
                    groups: ['type-export', 'unknown']
                }
            ],
            'perfectionist/sort-named-imports': [
                'error',
                {
                    groups: ['type-import', 'unknown']
                }
            ],
            'perfectionist/sort-object-types': [
                'warn',
                {
                    partitionByNewLine: true
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
            // Checked by "no-useless-escape"
            'regexp/no-useless-escape': 'off',
            'require-unicode-regexp': 'warn',
            // Lots of false positives
            'secure-coding/no-improper-sanitization': 'off',
            // Checked by "complexity"
            'sonarjs/cognitive-complexity': 'off',
            'sonarjs/different-types-comparison': 'off',
            // Checked by "regexp/no-dupe-characters-character-class"
            'sonarjs/duplicates-in-character-class': 'off',
            // Checked by "no-control-regex"
            'sonarjs/no-control-regex': 'off',
            'sonarjs/no-duplicate-string': 'warn',
            // Checked by "secure-coding/no-hardcoded-passwords"
            'sonarjs/no-hardcoded-passwords': 'off',
            // Checked by "@typescript-eslint/no-misused-promises"
            'sonarjs/no-misused-promises': 'off',
            // Checked by "max-nested-callbacks"
            'sonarjs/no-nested-functions': 'off',
            'sonarjs/no-nested-template-literals': 'warn',
            // Checked by "@typescript-eslint/no-redundant-type-constituents"
            'sonarjs/no-redundant-type-constituents': 'off',
            'sonarjs/unnecessary-character-escapes': 'off',
            // Checked by "node-test/consistent-assert-style"
            'unicorn/consistent-assert': 'off',
            'unicorn/consistent-boolean-name': 'warn',
            // Checked by "perfectionist/sort-class-members"
            'unicorn/consistent-class-member-order': 'off',
            'unicorn/consistent-function-scoping': 'warn',
            'unicorn/empty-brace-spaces': 'off',
            'unicorn/filename-case': [
                'error',
                {
                    case: 'camelCase',
                    ignore: ['DB', 'URL']
                }
            ],
            'unicorn/name-replacements': [
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
            'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
            // Checked by "perfectionist/sort-union-types"
            'unicorn/prefer-type-literal-last': 'off',
            'write-good-comments/write-good-comments': [
                'warn',
                {
                    passive: false,
                    whitelist: writeGoodCommentsAllowlist
                }
            ]
        }
    },
    {
        files: ['**/*.json'],
        ignores: [
            '**/.markdownlint.json',
            '**/package.json',
            '**/package-lock.json'
        ],
        rules: {
            'unicorn/escape-case': 'error',
            'unicorn/indent': ['error', { indent: 2 }],
            'unicorn/key-name-casing': 'warn',
            'unicorn/no-empty-file': 'error',
            'unicorn/no-zero-fractions': 'error',
            'unicorn/number-literal-case': 'error'
        }
    },
    {
        files: ['**/package.json'],
        extends: [eslintPluginNodeDependencies.configs.recommended]
    },
    {
        files: ['**/*.md']
    }
]);
export { defineConfig } from 'eslint/config';
