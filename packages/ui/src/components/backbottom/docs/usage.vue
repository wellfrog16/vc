<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'target', description: '触发滚动的对象，CSS 选择器字符串或者 DOM 对象', type: 'string | HTMLElement', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: 'document.documentElement，如果在 el-scrollbar 组件中，则自动选择' },
        { param: 'parent', description: '自动选择父容器', type: 'boolean', defaultValue: 'false' },
        { param: 'visibility-height', description: '滚动高度达到此参数值才出现', type: 'number', defaultValue: '200' },
        { param: 'right', description: '控制其显示位置，距离页面右边距', type: 'number', defaultValue: '40' },
        { param: 'bottom', description: '控制其显示位置，距离页面底部距离', type: 'number', defaultValue: '40' },
    ],
    slots: [
        { name: 'default', description: '自定义内容' },
    ],
}
</script>
