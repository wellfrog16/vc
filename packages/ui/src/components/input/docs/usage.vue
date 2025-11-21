<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'block', description: '内联还是块级展示', type: 'boolean', defaultValue: 'false' },
        { param: 'width', description: '宽度', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '内联214px；块级100%' },
        { param: '其他', description: 'el-input 的属性、事件', type: 'https://element-plus.gitee.io/zh-CN/component/input.html#attributes' },
    ],
}
</script>
