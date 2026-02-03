<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'flex', description: '修改成 flex 布局', type: 'boolean', defaultValue: 'false' },
        { param: 'padding', description: '设置内边距', type: 'number', defaultValue: '0' },
        { param: '其他', description: 'el-scrollbar 的属性、事件', type: 'https://element-plus.org/zh-CN/component/scrollbar#api' },
    ],
}
</script>
