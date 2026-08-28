import assert from 'assert'
import { describe, it } from 'node:test'

assert.strictEqual(1 + 1, 2)

describe('basic arithmetic', () => {
  it('should add numbers correctly', () => {
    assert(1 + 1 == 2)
  })
})
