<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'width', description: '宽度', type: 'string | number', defaultValue: '-' },
        { param: '其他', description: 'el-input 的属性、事件', type: 'https://element-plus.org/zh-CN/component/input#api' },
    ],
}
</script>
