# single-player

## 功能

单音乐播放，循环，无歌词。简易版播放器，用于展示音乐播放器的基本功能。

:::warning
BUG：因为使用 el-slider 作为进度条，双向绑定会使每秒播放重新渲染进度条，导致只能拖拽进度条（拖拽时关闭双向绑定），无法点击。解决办法：手动定制一个进度条即可
:::

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3,11}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>
