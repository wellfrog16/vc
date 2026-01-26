<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'padding', description: '容器的 padding', type: 'number', defaultValue: '8' },
        { param: 'props1', description: '第一个面板的属性（el-splitter-panel）', type: 'https://element-plus.org/zh-CN/component/splitter#splitterpanel-api' },
        { param: 'props2', description: '第二个面板的属性（el-splitter-panel）', type: 'https://element-plus.org/zh-CN/component/splitter#splitterpanel-api' },
        { param: '其他', description: 'el-splitter 的属性', type: 'https://element-plus.org/zh-CN/component/splitter#api' },
    ],
}
</script>
