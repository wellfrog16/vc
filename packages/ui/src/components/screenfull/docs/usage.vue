<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'color', description: 'SVG 的 fill 颜色', type: 'string', defaultValue: '-' },
        { param: 'size', description: 'SVG 图标的大小，size x size', type: 'number | string', defaultValue: '-' },
    ],
    slots: [
        { name: 'default', description: '需要触发的元素，参数：isFullscreen' },
    ],
}
</script>
