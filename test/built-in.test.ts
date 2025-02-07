import { resolve } from 'node:path'
import { expect, it } from 'vitest'
import { loadConfig } from '../src'

const fixtureDir = resolve(__dirname, 'fixtures')

it.skipIf(!process.features.typescript && !process.versions.bun)('built-in typescript', async () => {
  const cwd = resolve(fixtureDir, 'builtin')
  const result = await loadConfig({
    sources: [{ files: 'un.config' }],
    cwd,
  })
  expect(result.config).toMatchSnapshot()
})
