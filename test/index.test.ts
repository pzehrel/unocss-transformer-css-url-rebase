import MagicString from 'magic-string'
import { expect, it } from 'vitest'
import { withTransformCssUrlRebase } from '../src/transform'

function createTransformer() {
  return (code: string, id: string, root?: string) => {
    const s = new MagicString(code)
    withTransformCssUrlRebase(s, id, undefined, { root })
    return s.toString()
  }
}

it('relative path should be transformed', async () => {
  const code = `<div class="bg-[url(./assets/vite.png)]" />`
  const root = '/apps/app'
  const id = `${root}/src/App.vue`

  const transform = createTransformer()
  const result = transform(code, id, root)
  expect(result).toMatchInlineSnapshot(`"<div class="bg-[url(/src/assets/vite.png)]" />"`)
})

it('windows relative path should be transformed', async () => {
  const code = `<div class="bg-[url(assets\\vite.png)]" />`
  const root = 'C:\\Users\\user\\Desktop\\apps\\app'
  const id = `${root}\\src\\App.vue`

  const transform = createTransformer()
  const result = transform(code, id, root)
  expect(result).toMatchInlineSnapshot(`"<div class="bg-[url(/src/assets/vite.png)]" />"`)
})

it('absolute path should not be transformed', async () => {
  const code = `<div class="bg-[url(/assets/vite.png)]" />`
  const root = '/apps/app'
  const id = `${root}/src/App.vue`

  const transform = createTransformer()
  const result = transform(code, id, root)
  expect(result).toMatchInlineSnapshot(`"<div class="bg-[url(/assets/vite.png)]" />"`)
})

it('http url should not be transformed', async () => {
  const code = `<div class="bg-[url(https://vite.dev/logo.svg)]" />`
  const root = '/apps/app'
  const id = `${root}/src/App.vue`

  const transform = createTransformer()
  const result = transform(code, id, root)
  expect(result).toMatchInlineSnapshot(`"<div class="bg-[url(https://vite.dev/logo.svg)]" />"`)
})
