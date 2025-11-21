<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*name', description: 'icon 对应的 name', type: 'string', defaultValue: '-' },
        { param: 'color', description: 'SVG 的 fill 颜色', type: 'string', defaultValue: 'inherit' },
        { param: 'size', description: 'SVG 图标的大小，size x size', type: 'number', defaultValue: '-' },
    ],
}
</script>
