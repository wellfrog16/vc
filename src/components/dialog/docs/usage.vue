<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'showFullscreen', description: '是否显示最大化的按钮', type: 'boolean', defaultValue: 'true' },
        { param: 'lazy', description: '是否使用懒渲染', type: 'boolean', defaultValue: 'true' },
        { param: 'destoryDelay', description: '懒渲染时销毁延迟', type: 'number', defaultValue: '500' },
        { param: 'height', description: '滚动条区域高度', type: 'number | string', defaultValue: '-' },
        { param: 'max-height', description: '滚动条区域最大高度，未到最大高度自适应', type: 'number | string', defaultValue: '-' },
        { param: '其他', description: 'el-dialog 的属性、事件、插槽', type: 'https://element-plus.gitee.io/zh-CN/component/dialog.html#%E5%B1%9E%E6%80%A7', defaultValue: '-' },
    ],
}
</script>
