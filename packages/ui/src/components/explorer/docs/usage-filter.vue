<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'placeholder', description: '占位符', type: 'string', defaultValue: '查询' },
        { param: 'clearable', description: '是否可清空', type: 'boolean', defaultValue: 'true' },
        { param: 'padding-bottom', description: '底部间距', type: 'number', defaultValue: '8' },
        { param: 'create', description: '创建按钮是否显示', type: 'boolean', defaultValue: 'false' },
        { param: 'disabled', description: '是否禁用', type: 'boolean', defaultValue: 'false' },
        { param: 'debounce', description: '防抖时间', type: 'number', defaultValue: '300' },
    ],
    events: [
        { name: 'create', description: '创建按钮点击回调', param: '-' },
        { name: 'filter', description: '过滤关键词变化回调', param: 'keyword' },
    ],
}
</script>
