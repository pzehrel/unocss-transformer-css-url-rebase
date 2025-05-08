import type { SourceCodeTransformer } from '@unocss/core'
import type { TransformerCssUrlRebaseOptions } from './options'
import { withTransformCssUrlRebase } from './transform'

export function transformerCssUrlRebase(options?: TransformerCssUrlRebaseOptions): SourceCodeTransformer {
  return {
    name: 'unocss-transformer-css-url-rebase',
    enforce: 'pre',
    transform(code, id, { root }) {
      const highlightAnnotations = withTransformCssUrlRebase(code, id, undefined, Object.assign({ root }, options))
      return { highlightAnnotations }
    },
  }
}

export default transformerCssUrlRebase

export { withTransformCssUrlRebase }
