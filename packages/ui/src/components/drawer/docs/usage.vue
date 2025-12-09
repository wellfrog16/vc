<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'lazy', description: '是否使用懒渲染', type: 'boolean', defaultValue: 'true' },
        { param: 'showDefaultFooter', description: '是否显示默认带关闭的 footer', type: 'boolean', defaultValue: 'false' },
        { param: 'boxPadding', description: '内容区域上下部分是否有模拟的内边距', type: 'boolean', defaultValue: 'true' },
        { param: '其他', description: 'el-drawer 的属性、事件、插槽', type: 'https://element-plus.org/zh-CN/component/drawer#api', defaultValue: '-' },
    ],
}
</script>
