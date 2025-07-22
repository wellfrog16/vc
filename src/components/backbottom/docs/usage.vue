<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'target', description: '触发滚动的对象', type: 'HTMLElement', defaultValue: 'html节点' },
        { param: 'visibility-height', description: '滚动高度达到此参数值才出现', type: 'number', defaultValue: '200' },
        { param: 'right', description: '控制其显示位置，距离页面右边距', type: 'number', defaultValue: '40' },
        { param: 'bottom', description: '控制其显示位置，距离页面底部距离', type: 'number', defaultValue: '40' },
    ],
    slots: [
        { name: 'default', description: '自定义默认内容' },
    ],
}
</script>
