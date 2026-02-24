<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'padding', description: '容器间隙', type: 'number', defaultValue: '8' },
        { param: 'resizable', description: '是否可调整大小', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'el-splitter-panel 的属性、事件', type: 'https://element-plus.org/zh-CN/component/splitter#splitterpanel-api' },
    ],
}
</script>
