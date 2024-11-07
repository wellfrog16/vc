## 功能

用于裁剪图片，常用于图片上传前的裁剪以及图片下载前的裁剪。

基于 [cropperjs](https://fengyuanchen.github.io/cropperjs/) 二次封装，更贴近业务场景

## 功能示例

### 普通模式
保持原始 cropperjs 的调用方式，增加自定义方法和事件

<Example1 />

### 对话框模式
更贴近常用的业务场景

<Example2 />

## 最小示例

<<< ./simple.vue{3,12,13}

## API

<Usage />

<script setup>
import Example1 from "@/components/cropper/docs/example1.vue";
import Example2 from "@/components/cropper/docs/example2.vue";
import Usage from "@/components/cropper/docs/usage.vue";
</script>