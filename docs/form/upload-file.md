---
title: upload-file
---

## 功能

上传单图片，展示图片（fit）以及button。也可以修改accept上传其他格式的文件，默认为图片

:::tip
这里仅返回 File 类型的数据，需要自行使用 axios/fetch 等完成上传。这样方便在前端业务层面处理header、权限信息等
:::


## 功能示例

<Example />

## 简单示例

<Simple />

@[code vue{3,13-22}](@/components/upload-file/docs/simple.vue)

## 用法

<Usage />

<script setup>
import Example from "@/components/upload-file/docs/example.vue";
import Simple from "@/components/upload-file/docs/simple.vue";
import Usage from "@/components/upload-file/docs/usage.vue";
</script>