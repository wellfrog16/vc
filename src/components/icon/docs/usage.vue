<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*name', description: 'icon 对应的 name', type: 'string', defaultValue: '-' },
        { param: '*type', description: 'icon 使用类型', type: 'el | awesome | svg', defaultValue: '-' },
    ],
}
</script>
