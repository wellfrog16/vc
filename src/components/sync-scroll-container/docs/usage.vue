<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    slots: [
        { name: 'default', description: '内容区域' },
        { name: 'header', description: '冻结的表头' },
        { name: 'sidebar', description: '冻结的侧边栏' },
        { name: 'corner', description: '左上角' },
    ],
}
</script>
