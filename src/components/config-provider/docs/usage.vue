<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'button', description: 'button 组件的 confirm 和 confirmInfo 参数', type: './button.html#api', defaultValue: '-' },
    ],
}
</script>
