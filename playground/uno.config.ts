import {
  defineConfig,
  presetMini,
} from 'unocss'
import { transformerCssUrlRebase } from 'unocss-transformer-css-url-rebase'

export default defineConfig({
  presets: [
    presetMini(),
  ],
  transformers: [
    transformerCssUrlRebase({
      root: __dirname,
    }),
  ],
})
