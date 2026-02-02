<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'padding', description: '容器的 padding', type: 'number', defaultValue: '8' },
        { param: '其他', description: 'el-splitter-panel 的属性、事件', type: 'https://element-plus.org/zh-CN/component/splitter#splitterpanel-api' },
    ],
}
</script>
