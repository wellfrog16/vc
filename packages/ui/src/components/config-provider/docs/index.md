# config-provider

## 功能

给组件配置全局默认参数

目前支持的组件有：`button`, `pca-picker`

## 功能示例

### button

<Example />

### pca-picker

```
// gitee 因为不能跨域，所以用代理跨域
 pca-base-url="https://gitee.com/wellfrog16/area/raw/master"
 cros-proxy="https://api.allorigins.win/raw?url="

// github
 pca-base-url="https://raw.githubusercontent.com/wellfrog16/area/refs/heads/master"
```

## 示例

<<< ./simple.vue{3-6,16-26}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>
