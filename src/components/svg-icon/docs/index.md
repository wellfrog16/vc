## 功能

基于 `iconfont.cn` 封装的 icon 组件。使用全量加载。
- 通过 `font-size` 控制 icon 大小，`color` 控制 icon 的颜色。
- 你可以通过 [iconfont.cn](https://iconfont.cn) 挑选你需要 icon。
- 最后加载 `Symbol` 模式提供的 js 即可使用，像这样

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- .... -->
        <!-- iconfont 提供的 js，你需要换成自己的 js 地址 -->
        <script src="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"></script>
        <!-- .... -->
    </head>
</html>
```

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3}

## API

<Usage />

<script setup>
import Example from "@/components/svg-icon/docs/example.vue";
import Usage from "@/components/svg-icon/docs/usage.vue";
</script>