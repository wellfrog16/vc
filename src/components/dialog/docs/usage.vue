<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'showFullscreen', description: '是否显示最大化的按钮', type: 'boolean', defaultValue: 'true' },
        { param: '其他', description: 'el-dialog 的属性、事件、插槽', type: 'https://element-plus.gitee.io/zh-CN/component/dialog.html#%E5%B1%9E%E6%80%A7', defaultValue: '-' },
    ],
}
</script>
