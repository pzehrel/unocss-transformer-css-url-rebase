import type { HighlightAnnotation } from '@unocss/core'
import type MagicString from 'magic-string'
import type { TransformerCssUrlRebaseOptions } from './options'
import { dirname, isAbsolute, join, normalize } from 'pathe'

const RULE_RE = /[.:\w()[\]\-]+url\(.+?\)[.:\w()[\]\-]+/g
const URL_RE = /url\(("|')?(.+?)("|')?\)/

export function withTransformCssUrlRebase(
  code: MagicString,
  id: string,
  globalRegexp: RegExp = RULE_RE,
  options?: TransformerCssUrlRebaseOptions,
) {
  if (!id || !options?.root) {
    return
  }

  const dir = dirname(id)
  const root = normalize(options.root)

  const annotations: HighlightAnnotation[] = []

  const matches = code.original.matchAll(globalRegexp)
  for (const { 0: rule, index } of matches) {
    const newRule = rule.replace(URL_RE, (_, q1 = '', url, q2 = '') => {
      if (isRelative(url)) {
        url = join(dir, url)
        url = url.replace(root, '')
      }
      return `url(${q1}${url}${q2})`
    })

    if (newRule !== rule) {
      code.overwrite(index, index + rule.length, newRule)
      annotations.push({
        offset: index,
        length: rule.length,
        className: newRule,
      })
    }
  }

  return annotations
}

export function isRelative(url: string) {
  return url && !/^\w+:\/\//.test(url) && !isAbsolute(url) && !url.startsWith('data:')
}
