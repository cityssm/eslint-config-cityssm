# eslint-config-cityssm

[![DeepSource](https://app.deepsource.com/gh/cityssm/eslint-config-cityssm.svg/?label=active+issues&show_trend=true&token=2x51pzQmdmBmD3LNk4XgOTZC)](https://app.deepsource.com/gh/cityssm/eslint-config-cityssm/)

![Code Scanning Banner](banner.png)

[ESLint](https://eslint.org/) rules used in the
[City of Sault Ste. Marie's TypeScript projects](https://github.com/search?q=org%3Acityssm++language%3ATypeScript&type=repositories).

Now testing support for ESLint's CSS, JSON, and Markdown parsers!

## Installation

```sh
npm install --save-dev eslint-config-cityssm
```

## Simple Usage

For web applications, export the default export.

```javascript
export { default } from 'eslint-config-cityssm'
```

For simpler packages, export the `packageConfig`.

```javascript
export { default } from 'eslint-config-cityssm/packageConfig'
```

## Advanced Usage (TypeScript)

```typescript
import default as configWebApp {
  type ConfigObject,
  defineConfig
} from 'eslint-config-cityssm'
import { cspellWords } from 'eslint-config-cityssm/exports'

export const config: ConfigObject[] = defineConfig(configWebApp, {
  files: ['**/*.ts'],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json', './public/javascripts/tsconfig.json']
    }
  },
  rules: {
    '@cspell/spellchecker': [
      'warn',
      {
        cspell: {
          words: [...cspellWords, 'autoincrement', 'fontawesome']
        }
      }
    ],
    '@typescript-eslint/no-unsafe-type-assertion': 'off'
  }
})

export default config
```

## Included Plugins

**Thanks to all of the developers who help make the City of Sault Ste. Marie's code awesome!** 😎

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-love](https://www.npmjs.com/package/eslint-config-love)
- [@cspell/eslint-plugin](https://www.npmjs.com/package/@cspell/eslint-plugin)
- [@eslint-community/eslint-plugin-eslint-comments](https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-no-secrets](https://www.npmjs.com/package/eslint-plugin-no-secrets)
- [eslint-plugin-no-unsanitized](https://www.npmjs.com/package/eslint-plugin-no-unsanitized)
- [eslint-plugin-package-json](https://www.npmjs.com/package/eslint-plugin-package-json)
- [eslint-plugin-perfectionist](https://www.npmjs.com/package/eslint-plugin-perfectionist)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp)
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-woke](https://www.npmjs.com/package/eslint-plugin-woke)
- [eslint-plugin-write-good-comments](https://www.npmjs.com/package/eslint-plugin-write-good-comments)
- [html-eslint](https://github.com/yeonjuan/html-eslint)

## Projects Using eslint-config-cityssm

[**Used in 70+ projects**](https://github.com/search?q=eslint-config-cityssm+path%3A**%2Fpackage.json&type=code), including:

- [EMILE (Energy Monitoring in Less Effort)](https://github.com/cityssm/EMILE)

- [Attendance Tracking](https://github.com/cityssm/attendance-tracking)

- [General Licence Manager](https://github.com/cityssm/general-licence-manager)

## Related Projects

**[prettier-config-cityssm](https://github.com/cityssm/prettier-config-cityssm)**<br />
Prettier configuration for the City of Sault Ste. Marie's projects.
