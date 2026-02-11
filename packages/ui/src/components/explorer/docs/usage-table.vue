<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '表格数据', type: 'any[]', defaultValue: '[]' },
        { param: 'highlightCurrent', description: '是否高亮当前项', type: 'boolean', defaultValue: 'true' },
        { param: '其他', description: 'el-table 的属性、事件', type: 'https://element-plus.org/zh-CN/component/table#api' },
    ],
}
</script>
