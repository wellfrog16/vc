## 功能

<CdnTag name="cropperjs" />上传单图片，展示图片（fit）以及button。也可以修改accept上传其他格式的文件，默认为图片。图片类型支持上传前裁剪

此组件依赖 [cropper](../../components/cropper.md) 组件

:::tip
这里仅返回 File 类型的数据，需要自行使用 axios/fetch 等完成上传。这样方便在前端业务层面统一处理header、权限信息等
:::

:::warning
图片裁剪不会做类型强校验，需要正确设置`accept`的值（默认为图片）
:::

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3,13-22}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
import CdnTag from "@/components/cdn-tag.vue";
</script>
