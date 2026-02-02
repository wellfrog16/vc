<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '其他', description: 'el-splitter 的属性、事件', type: 'https://element-plus.org/zh-CN/component/splitter#api' },
    ],
}
</script>
