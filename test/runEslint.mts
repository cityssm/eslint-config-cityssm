import { execa } from 'execa'

// eslint-disable-next-line unicorn/prefer-top-level-await
execa('eslint --exit-on-fatal-error test/test.ts', { stdio: 'inherit' }).catch(
  (error) => {
    const exitCode = error.exitCode === 1 ? 0 : 1

    console.log(`Exiting with exit code: ${exitCode}`)

    process.exitCode = exitCode
  }
)
