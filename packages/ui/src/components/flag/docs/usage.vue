<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*code', description: '地区对应的 2 位/ 3 位代码', type: 'https://www.iso.org/obp/ui/#search/code/', defaultValue: '-' },
        { param: 'squared', description: '是否正方形国旗', type: 'boolean', defaultValue: 'false' },
        { param: 'size', description: 'SVG 图标的大小，size x size', type: 'number | string', defaultValue: '-' },
    ],
}
</script>
