import { exec } from 'node:child_process'

const eslintCommand =
  'eslint --config ./test/eslint.testWebappConfig.js --exit-on-fatal-error ./samples/*.test.ts'

console.log(`Running ${eslintCommand} ...`)

try {
  exec(eslintCommand, (error, stdout, stderr) => {
    /*
     * Print output
     */

    if (stdout !== '') {
      console.log('\nSTDOUT')
      console.log(stdout)
    }

    if (stderr !== '') {
      console.log('\nSTDERR')
      console.log(stderr)
    }

    /*
     * Check if processed correctly
     */

    if (error === null) {
      console.log('❗  ESLint did not find any errors or warnings.')
      process.exitCode = 1
    } else if (error.code === 2) {
      console.log('❗  Broken configuration.')
      process.exitCode = 1
    } else {
      console.log(
        '✔️  ESLint errors and warnings found. Config checked successfully.'
      )
      process.exitCode = 0
    }

    /*
     * Check if all imported plugins are used
     */

    console.log('\nPLUGINS TESTED')

    const pluginStrings = [
      '@eslint-community/eslint-comments/',
      '@typescript-eslint/',
      'import/',
      'jsdoc/',
      'n/',
      'no-secrets/',
      'no-unsanitized/',
      'promise/',
      'regexp/',
      'security/',
      'sonarjs/',
      'unicorn/'
    ]

    const outputLines = stdout.split('\n')

    for (const pluginString of pluginStrings) {
      const pluginUsed = outputLines.some((outputLine) => {
        const possiblePluginString = outputLine.trim().split(' ').at(-1) ?? ''
        return possiblePluginString.startsWith(pluginString)
      })

      console.log(` ${pluginUsed ? '✔️' : '⚠️'}  ${pluginString}`)

      if (!pluginUsed) {
        process.exitCode = 1
      }
    }
  })
} catch {
  console.log('❗ Error running ESLint.')
  process.exitCode = 1
}
