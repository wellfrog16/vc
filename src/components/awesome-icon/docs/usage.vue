<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*name', description: 'icon 对应的 name，详情点击后面的链接', type: 'https://fontawesome.com/search?o=r&m=free', defaultValue: '-' },
        { param: 'mode', description: '使用 Css 还是 SVG', type: 'css | svg', defaultValue: 'css' },
    ],
}
</script>
