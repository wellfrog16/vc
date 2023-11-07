<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'lazy', description: '是否使用懒渲染', type: 'boolean', defaultValue: 'true' },
        { param: 'destoryDelay', description: '懒渲染时销毁延迟', type: 'number', defaultValue: '500' },
        { param: '其他', description: 'el-drawer 的属性、事件、插槽', type: 'https://element-plus.org/zh-CN/component/drawer.html#%E5%B1%9E%E6%80%A7', defaultValue: '-' },
    ],
}
</script>
