<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*explorer-key', description: '唯一标识', type: 'string', defaultValue: '-' },
        { param: 'layout', description: '布局方向', type: 'horizontal | vertical', defaultValue: 'horizontal' },
        { param: 'lazy', description: '是否懒加载', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'el-splitter 的属性、事件', type: 'https://element-plus.org/zh-CN/component/splitter#splitter-api' },
    ],
}
</script>
