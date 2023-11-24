import { type ExecaError, execa } from 'execa'

const eslintCommand = 'npx eslint --exit-on-fatal-error test/test.ts'

async function runEslint(): Promise<number> {
  try {
    await execa(eslintCommand, {
      stdio: 'inherit',
      buffer: false
    })

    // Process should not finish successfully
    console.log('❗ No ESLint errors or warnings found.')
    return 1
  } catch (error) {
    if ((error as ExecaError).exitCode === 2) {
      console.log('❗ Broken configuration.')
      return 1
    } else {
      console.log(
        '✔️ ESLint errors and warnings found. Config checked successfully.'
      )
      return 0
    }
  }
}

console.log(`Running ${eslintCommand} ...`)

process.exitCode = await runEslint()
