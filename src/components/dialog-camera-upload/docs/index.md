## 功能

通过摄像头拍照或者直接上传获取文件数据，支持裁剪，依赖 [cropper](../../components/cropper)

:::warning
**网页需要 https 模式才能调用摄像头**

拍照图片与视口大小不一致的问题，需要等到 [useUserMedia](https://vueuse.org/core/useusermedia/#useusermedia) 更新参数，v10版本

参考
* [https://github.com/vueuse/vueuse/pull/2032](https://github.com/vueuse/vueuse/pull/2032)
* [https://github.com/vueuse/vueuse/issues/2193](https://github.com/vueuse/vueuse/issues/2193)
:::

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3-7,17-26}

## API

<Usage />

<script setup>
import Example from "@/components/dialog-camera-upload/docs/example.vue";
import Usage from "@/components/dialog-camera-upload/docs/usage.vue";
</script>