---
title: choice-boolean
---

## 功能

逻辑选择组件，简化代码。

::: warning
该组件引用 choice 组件实现，并保留了参数的向后传递

但不校验参数的合理性，比如在此组件上使用 multiple 属性，需自行避免
:::

## 功能示例

<Example />

## 简单示例

<Simple />

@[code vue{3,12}](@/components/choice-boolean/docs/simple.vue)

## 用法

<Usage />

<script setup>
import Example from "@/components/choice-boolean/docs/example.vue";
import Simple from "@/components/choice-boolean/docs/simple.vue";
import Usage from "@/components/choice-boolean/docs/usage.vue";
</script>