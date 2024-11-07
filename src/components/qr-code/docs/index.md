## 功能

二维码生成

:::warning
staticfile 和 baomitu 等 cdn 源只有 1.0.0 的版本，使用这些 cdn 源需要指定 version 属性。

默认使用 jsdelivr 无此问题
:::


## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3,13-22}

## API

<Usage />

<script setup>
import Example from "@/components/qr-code/docs/example.vue";
import Usage from "@/components/qr-code/docs/usage.vue";
</script>