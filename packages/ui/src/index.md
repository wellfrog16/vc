---
sidebarDepth: 1
---

# VC 组件库

`自用` 的基于 `element-plus` 二次封装的 `vue3` 组件库。追求在业务场景中，尽可能使用更少的代码量来实现需求。
因此在组件封装上，以 `方便` 为主，打包仅 `esm` 模式。

组件开发时，依赖的 `vue` 版本是 `^3.2.37`

组件库所使用 CDN 源为 [jsdelivr](https://www.jsdelivr.com/)，并使用了一个自用的函数库 `@wfrog/utils`

:::danger
如果 jsdelivr 无法访问，会导致部分组件失效。解决办法：需要通过 window.h_utils 指定健康的 cdn 库
:::

## 全量引入

本组件库依赖 `element-plus`，需要事先安装组件中使用的库，以及组件的依赖

```bash
npm i element-plus@~2.8.8 @element-plus/icons-vue@^2.3.1 @vueuse/core@^11.2.0
npm i @wfrog/utils@^0.1.0 lodash-es@^4.17.21 vuedraggable@^4.1.0 
```

然后安装本组件库

```bash
npm i @wfrog/vc 
```


在 app.ts 里，全量引入组件和css
```ts
import VC from '@wfrog/vc'
import '@wfrog/vc/es/style.css'

const app = createApp(App)
app.use(VC)
```

在 vue 文件中使用
```vue
<template>
    <VcButton :icon="{ type: 'svg', name: 'test' }" type="primary">SVG 图标</VcButton>
</template>
```


## 单组件加载

本组件库依赖 `element-plus`，需要事先安装组件中使用的库。组件的依赖可以不按照，仅在使用到有依赖组件的时候才去安装

```bash
npm i element-plus@~2.8.8 @element-plus/icons-vue@^2.3.1 @vueuse/core@^11.2.0
npm i @wfrog/utils@^0.1.0 lodash-es@^4.17.21
```

然后安装本组件库

```bash
npm i @wfrog/vc 
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
