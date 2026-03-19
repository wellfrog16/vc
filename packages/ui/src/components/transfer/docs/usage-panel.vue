<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string[] | number[]', defaultValue: '-' },
        { param: 'title', description: '标题', type: 'string', defaultValue: '-' },
        { param: 'data', description: '元数据', type: 'ITransferChildItem', defaultValue: '-' },
        { param: 'height', description: '高度', type: 'string | number', defaultValue: '300px' },
        { param: 'helf-width', description: '单个面板宽度', type: 'string | number', defaultValue: '200px' },
    ],
    types: [
        { param: 'ITransferChildItem', description: '{ label: string, icon?: string, value: string | number }' },
    ],
    events: [
        { name: 'change', description: '选择变化事件', param: 'type, item' },
    ],
}
</script>
