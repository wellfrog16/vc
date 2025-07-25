## 功能

el-dialog 的修改版，右上角增加最大化，样式调整。

懒渲染模式（未开启时不渲染，打开时渲染，关闭时销毁），常用于循环数据的默认隐藏

flex 模式方便 slot 的内容实现高度撑满父容器（100%高，slot节点的 flex-grow 为 1）

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3-6,15}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>