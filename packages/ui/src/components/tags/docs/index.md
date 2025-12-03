## 功能

基于 el-tag，用于标签组的编辑，可以对标签**双击**编辑、**拖拽**排序

:::tip
此组件依赖 vuedraggable-es，考虑此组件不一定会被用到，默认不安装 vuedraggable-es。因此使用 tags 组件时需要

npm i vuedraggable-es@^4.1.1
:::

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3,12}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>
