<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    slots: [
        { name: 'default', description: '需要触发的元素' },
    ],
}
</script>
