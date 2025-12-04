<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*content', description: '文本', type: 'string', defaultValue: '-' },
        { param: 'max-width', description: '自定义最大宽度，不设定或者 0 则自动判断', type: 'string', defaultValue: '0' },
        { param: 'effect', description: '默认提供的主题', type: 'dark | light', defaultValue: 'light' },
        { param: 'placement', description: 'tooltip 的出现位置，见 el-tooltip', type: 'https://element-plus.org/zh-CN/component/tooltip#api', defaultValue: 'top' },
        { param: 'show-tooltip', description: '当展示省略号的时候，是否显示 Tooltip', type: 'boolen', defaultValue: 'true' },
        { param: 'popper-options', description: 'popper.js 的参数', type: 'https://popper.js.org/docs/v2/', defaultValue: '-' },
        { param: 'popper-class', description: '为 Tooltip 的 popper 添加类名', type: 'string', defaultValue: '-' },
        { param: 'enterable', description: '鼠标是否可进入到 Tooltip 中', type: 'boolen', defaultValue: 'false' },
    ],
    slots: [
        { name: 'default', description: '文本内容，等同于 content 参数' },
    ],
}
</script>
