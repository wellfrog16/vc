<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'block', description: '内联还是块级展示', type: 'boolean', defaultValue: 'false' },
        { param: 'width', description: '宽度', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '内联240px；块级100%' },
        { param: 'placeholder', description: 'placeholder', type: 'string', defaultValue: '请选择' },
        { param: '其他', description: 'transfer-panel 的属性', type: './transfer.html#transfer-panel-api' },
        { param: '其他', description: 'el-select 的属性、事件', type: 'https://element-plus.org/zh-CN/component/select#select-api' },
    ],
}
</script>
