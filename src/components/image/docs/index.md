## 功能

el-image 的修改版，增加文字展示方式，点击展开大图

::: warning
文字模式时，表现为块级元素。如果改成内联元素，功能会失效。此并非 bug，而是故意设置，以实现自动判断是否显示省略号。
:::

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3-5}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>