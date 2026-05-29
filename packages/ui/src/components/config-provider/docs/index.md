# config-provider

## 功能

给组件配置全局默认参数

目前支持的组件有：`button`, `pca-picker`, `info-tooltip`

## button

<ExampleButton />

<<< ./example-button.vue{3-13,23-36}

## pca-picker

直接在`<config-provider>`中配置参数即可

```
// gitee 因为不能跨域，所以用代理跨域
 pca-base-url="https://gitee.com/wellfrog16/area/raw/master"
 cros-proxy="https://api.allorigins.win/raw?url="

// github
 pca-base-url="https://raw.githubusercontent.com/wellfrog16/area/refs/heads/master"
```

## info-tooltip

<ExampleInfoTooltip />

<<< ./example-info-tooltip.vue{2-11,18-29}

## API

<Usage />

<script setup>
import ExampleButton from "./example-button.vue";
import ExampleInfoTooltip from "./example-info-tooltip.vue";
import Usage from "./usage.vue";
</script>
