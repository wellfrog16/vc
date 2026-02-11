<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'padding-bottom', description: '底部间距', type: 'number', defaultValue: '8' },
        { param: 'height', description: '容器高度，方便展开收起', type: 'number', defaultValue: '32' },
        { param: 'model', description: '表单的 form.fields', type: 'Record<string, any>', defaultValue: '{}' },
        { param: 'auto-space', description: '表单是否自动填充空间', type: 'boolean', defaultValue: 'true' },
        { param: 'query-key', description: '搜索栏唯一 key，用于 storage 的存储', type: 'string', defaultValue: 'query' },
    ],
    types: [
        { param: 'IValue', description: 'string | number | boolean' },
    ],
    events: [
        { name: 'close', description: '对话框关闭的回调', param: '-' },
    ],
    slots: [
        { name: 'default', description: '内容区域' },
    ],
}
</script>
