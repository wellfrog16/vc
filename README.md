# VC 组件库

`自用` 的基于 `element-plus` 二次封装的 `vue3` 组件库。追求在业务场景中，尽可能使用更少的代码量来实现需求。
因此在组件封装上，以 `方便` 为主，打包仅 `esm` 模式。

组件开发时，依赖的 `vue` 版本是 `^3.5.22`

组件库所使用 CDN 源为 [jsdelivr](https://www.jsdelivr.com/)，并使用了一个自用的函数库 `@wfrog/utils`

**！！！如果 jsdelivr 无法访问，会导致部分组件失效。解决办法：todo**

## 组件库依赖

本组件库依赖 `element-plus`，需要事先安装组件中使用的库，以及组件的依赖

```sh
pnpm i element-plus@~2.11.7 @element-plus/icons-vue@^2.3.2 @vueuse/core@^14.0.0
pnpm i @wfrog/utils@^0.1.0 lodash-es@^4.17.21
```

## 全量引入

```sh
pnpm i @wfrog/vc
```

在 app.ts 里，全量引入组件和css

```ts
import Vc from '@wfrog/vc'
import '@wfrog/vc/index.css'

const app = createApp(App)
app.use(Vc)
```

在 vue 文件中使用

```vue
<template>
    <vc-button :icon="{ type: 'svg', name: 'test' }" type="primary">SVG 图标</vc-button>
</template>
```

## 按需导入

```sh
pnpm install -D unplugin-vue-components unplugin-auto-import
```

在 vite.config.ts 里，配置自动导入和组件库

```ts
import VcResolver from '@wfrog/vc/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    // ...
    plugins: [
    // ...
        AutoImport({
            imports: ['vue', '@vueuse/core'],
        }),
        Components({
            resolvers: [VcResolver()],
        }),
    ],
})
```

## 单组件加载

```sh
pnpm i @wfrog/vc
```

在 app.ts 里，全量引入 css

```ts
import '@wfrog/vc/es/style.css'
```

在 vue 文件中

```vue
<template>
    <VcButton :icon="{ type: 'svg', name: 'test' }" type="primary">SVG 图标</VcButton>
</template>

<script lang="ts" setup>
import VcButton from '@wfrog/vc/es/components/button'
</script>
```

#### TODO

- 自动导入时，choice 组件的 el 样式未加载
