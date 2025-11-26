## 功能

<CdnTag name="fontawesome" />基于 `font-awesome 6.1.2` 的 `free` 版本封装的 icon 组件。提供全量 `css` 或者 `svg` 加载方式。css 体积较小

- 通过 `font-size` 控制 icon 大小，`color` 控制 icon 的颜色。
- 你可以通过 [这里](https://fontawesome.com/search?m=free&s=brands%2Csolid%2Cregular) 查看所有可以使用的 icon。它包括 `brands`、`solid`、`regular` 三个分类。

::: tip
由于为了方便而全量引用，所以使用 SVG 模式时，加载的 js 比较大(`629K`)。
但是使用 Css 模式时，由于有 `brands`、`solid`、`regular` 三个分类，如果没有使用某个分类的 icon，则不会加载对应分类的字体。
所以使用 Css 模式时，加载的资源量较小，三个分类全量 `300K`。

如果期望按需加载，可以使用 fontawesome 官方提供的 [vue 组件](https://fontawesome.com/v6/docs/web/use-with/vue/)
:::

::: tip
此外，该组件使用了 CDN 资源，如果组件**没有**被显示，也**不会**加载对应的 js 和 css。
:::

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
import CdnTag from "@/components/cdn-tag.vue";
</script>
