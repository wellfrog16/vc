---
sidebarDepth: 1
---

# VC 组件库

`自用` 的基于 `element-plus` 二次封装的 `vue3` 组件库。追求在业务场景中，尽可能使用更少的代码量来实现需求。
因此在组件封装上，以 `方便` 为主。

组件开发时，依赖的 `vue` 版本是 `^3.2.37`

组件库所使用 CDN 源为 [jsdelivr](https://www.jsdelivr.com/)，并使用了一个自用的函数库 `@wfrog/utils`

:::danger
如果 jsdelivr 无法访问，会导致部分组件失效。解决办法：todo
:::

## 全量引入

本组件库依赖 `element-plus`，需要事先安装组件中使用的库，以及组件的依赖

```sh
npm i element-plus@~2.2.13 @element-plus/icons-vue@^2.0.9
npm i @wfrog/utils@^0.1.0 lodash-es@^4.17.21 vuedraggable@^4.1.0 
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
    <HButton :icon="{ type: 'svg', name: 'test' }" type="primary">SVG 图标</HButton>
</template>
```


## 单组件加载

本组件库依赖 `element-plus`，需要事先安装组件中使用的库。组件的依赖可以不按照，仅在使用到有依赖组件的时候才去安装

```sh
npm i element-plus@~2.2.13 @element-plus/icons-vue@^2.0.9
npm i @wfrog/utils@^0.1.0 lodash-es@^4.17.21
```

在 app.ts 里，全量引入 css
```ts
import '@wfrog/vc/es/style.css'
```

在 vue 文件中
```vue
<template>
    <HButton :icon="{ type: 'svg', name: 'test' }" type="primary">SVG 图标</HButton>
</template>

<script lang="ts" setup>
import HButton from '@wfrog/vc/es/components/button'
</script>
```
