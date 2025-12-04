<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'type', description: '展示的嵌入方式', type: 'image | text', defaultValue: 'image' },
        { param: 'text', description: 'type 为 text 时显示的文案', type: 'string', defaultValue: '-' },
        { param: 'text-max-wdith', description: 'type 为 text 时，自定义最大宽度，不设定则自动判断', type: 'string', defaultValue: '0' },
        { param: 'src', description: '初始图片地址', type: 'string', defaultValue: '-' },
        { param: 'preview-src-list', description: '点击放大的图片组列表', type: 'string[]', defaultValue: '[src]' },
        { param: 'width', description: 'type 为 image 时图片的宽度', type: 'string', defaultValue: '160px' },
        { param: 'height', description: 'type 为 image 时图片的高度', type: 'string', defaultValue: '90px' },
        { param: 'fit', description: '原生图片的 fit', type: 'ImageFit', defaultValue: 'cover' },
        { param: 'show-tooltip', description: 'type 为 text 时，当展示省略号的时候，是否显示 tooltip', type: 'boolen', defaultValue: 'true' },
        { param: 'effect', description: '默认提供的主题', type: 'dark | light', defaultValue: 'light' },
        { param: 'placement', description: 'tooltip 的出现位置，见 el-tooltip', type: 'https://element-plus.org/zh-CN/component/tooltip#api', defaultValue: 'top' },
        { param: 'popper-class', description: '为 Tooltip 的 popper 添加类名', type: 'string', defaultValue: '-' },
        { param: 'enterable', description: '鼠标是否可进入到 Tooltip 中', type: 'boolen', defaultValue: 'false' },
    ],
    types: [
        { param: 'ImageFit', description: 'fill | contain | cover | none | scale-down' },
    ],
    slots: [
        { name: 'default', description: 'type 为 text 文本内容，优先级大于 text' },
    ],
}
</script>
