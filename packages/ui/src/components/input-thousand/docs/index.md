# input-thousand

## 功能

基于 [input-number](../../components/input-number) 的千分位输入框：输入时整数部分按千分位（逗号）格式化显示，小数位原样保留；绑定值始终输出 `number | undefined`，空值或非法输入输出 `undefined`。支持 `prefix`、`suffix` 插槽。

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
