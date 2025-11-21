<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*name', description: 'icon 对应的 name，可以在 iconfont.cn 查看', type: 'string', defaultValue: '-' },
    ],
}
</script>
