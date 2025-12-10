<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'name', description: 'icon 对应的 name，可以在 iconfont.cn 查看', type: 'string', defaultValue: '-' },
        { param: 'color', description: 'SVG 的 fill 颜色', type: 'string', defaultValue: '-' },
        { param: 'size', description: 'SVG 图标的大小，size x size', type: 'number | string', defaultValue: '-' },
    ],
    slots: [
        { name: 'default', description: '自定义 SVG 的 path，此时 name 参数无效，仅标识 SVG 内容' },
    ],
}
</script>
