import { type ExecaError, execa } from 'execa'

// eslint-disable-next-line unicorn/prefer-top-level-await
try {
  await execa('npx eslint --exit-on-fatal-error test/test.ts')

  // Process should not finish successfully
  console.log('❗ No ESLint errors or warnings found.')
  process.exitCode = 1
} catch (error) {
  if ((error as ExecaError).exitCode === 2) {
    console.log('❗ Broken configuration.')
    process.exitCode = 1
  } else {
    console.log(
      '✔️ ESLint errors and warnings found. Config checked successfully.'
    )
    process.exitCode = 0
  }
}
