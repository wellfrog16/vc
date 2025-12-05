<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'precision', description: '精度', type: 'number', defaultValue: '0' },
        { param: 'inputNumberClass', description: '附加到 el-input-number 的 class', type: 'string', defaultValue: '-' },
        { param: 'inputWidth', description: 'el-input-number 的宽度', type: 'string', defaultValue: '80px' },
        { param: '其他', description: 'el-input-number 的属性、事件', type: 'https://element-plus.org/zh-CN/component/input-number#api' },
    ],
    slots: [
        { name: 'prepend', description: '输入框前置内容，支持文案和 select。使用插槽时，controls-position 默认设置为 right' },
    ],
}
</script>
