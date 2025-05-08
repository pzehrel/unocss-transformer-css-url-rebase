<p align="center">
<img src="logo" alt='logo' style="width:100px;" />
</p>

<h1 align="center">unocss-transformer-css-url-rebase</h1>

<p align="center">A Unocss transformer that converts relative paths in 'url(...)' to absolute paths based on the project root, allowing Vite to recognize and handle these assets.</p>

<p align="center">
<a>
<img src="https://img.shields.io/npm/v/unocss-transformer-css-url-rebase?style=flat&colorA=080f12&colorB=1fa669" alt="npm version" />
</a>
<a>
<img src="https://img.shields.io/npm/dm/unocss-transformer-css-url-rebase?style=flat&colorA=080f12&colorB=1fa669" alt="npm downloads" />
</a>
<a>
<img src="https://img.shields.io/github/license/unocss-community/unocss-transformer-css-url-rebase.svg?style=flat&colorA=080f12&colorB=1fa669" alt="License" />
</a>
</p>

## Install
```shell
pnpm i -D unocss-transformer-starter
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerCssUrlRebase from 'unocss-transformer-css-url-rebase'

export default defineConfig({
  // ...
  transformers: [
    transformerCssUrlRebase({
      root: __dirname,
    }),
  ],
})
```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `root` | `string` | `undefined` | The root directory of the project. Not setting this will not affect the actual generated styles, it only affects the prompt function of the VSCode Unocss extension. |

