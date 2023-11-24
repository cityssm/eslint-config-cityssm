import { execa } from 'execa'

// eslint-disable-next-line unicorn/prefer-top-level-await
execa('eslint --exit-on-fatal-error test/test.ts', { stdio: 'inherit' }).catch(
  (error) => {
    process.exitCode = error.exitCode === 1 ? 0 : 1
  }
)
