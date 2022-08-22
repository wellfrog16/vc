<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'boolean', defaultValue: 'false' },
        { param: 'text', description: '是否的文案', type: 'string[]', defaultValue: '[是, 否]' },
    ],
    events: [
        { name: 'change', description: '选择变化时的触发', param: 'value' },
    ],
}
</script>
