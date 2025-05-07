import type MagicString from 'magic-string'
import type { SourceCodeTransformer, UnoGenerator } from 'unocss'

export interface TransformerStarterOptions {

}

export default function transformStarter(options?: TransformerStarterOptions): SourceCodeTransformer {
  return {
    name: 'unocss-transformer-starter',
    enforce: 'pre',
    async transform(code, _, { uno }) {
      await transformStarterMain(code, uno, options)
    },
  }
}

export async function transformStarterMain(
  code: MagicString,
  uno: UnoGenerator,
  // eslint-disable-next-line unused-imports/no-unused-vars
  options: TransformerStarterOptions = {},
) {
  // Your logic here
  code.replace('UnoCSS', 'UnoCSS is awesome')
}
