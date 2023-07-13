export declare const config: {
    root: boolean;
    env: {
        es6: boolean;
    };
    parser: string;
    parserOptions: {
        project: string[];
        ecmaVersion: number;
        sourceType: string;
    };
    plugins: string[];
    extends: string[];
    rules: {
        '@typescript-eslint/member-delimiter-style': (string | {
            multiline: {
                delimiter: string;
            };
            singleline: {
                delimiter: string;
            };
        })[];
        '@typescript-eslint/no-extra-semi': string;
        '@typescript-eslint/no-non-null-assertion': string;
        '@typescript-eslint/no-misused-promises': string;
        '@typescript-eslint/restrict-plus-operands': string;
        '@typescript-eslint/space-before-function-paren': string;
        '@typescript-eslint/strict-boolean-expressions': string;
        'import/order': (string | {
            'newlines-between': string;
            alphabetize: {
                order: string;
                orderImportKind: string;
            };
        })[];
        'import/no-unresolved': string;
        'sonarjs/cognitive-complexity': (string | number)[];
        'sonarjs/no-duplicate-string': string;
        'unicorn/consistent-function-scoping': string;
        'unicorn/empty-brace-spaces': string;
        'unicorn/filename-case': (string | {
            case: string;
            ignore: string[];
        })[];
        'unicorn/prevent-abbreviations': (string | {
            replacements: {
                def: {
                    definition: boolean;
                };
                ele: {
                    element: boolean;
                };
                eles: {
                    elements: boolean;
                };
                fns: {
                    functions: boolean;
                };
                res: {
                    result: boolean;
                };
                temp: {
                    temporary: boolean;
                };
            };
        })[];
    };
};
export default config;
