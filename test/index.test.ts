import type { UnoGenerator } from 'unocss'
import MagicString from 'magic-string'
import { createGenerator, presetWind3 } from 'unocss'
import { expect, it } from 'vitest'
import { transformStarterMain } from '../src'

async function createTransformer() {
  const uno = await createGenerator({
    presets: [presetWind3()],
  })

  return async (code: string, _uno: UnoGenerator = uno) => {
    const s = new MagicString(code)
    await transformStarterMain(s, _uno, {})
    return s.toString()
  }
}

it('basic', async () => {
  const transform = await createTransformer()
  const code = `hello UnoCSS`

  expect(await transform(code)).toMatchInlineSnapshot(`"hello UnoCSS is awesome"`)
})
