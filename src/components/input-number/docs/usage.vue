<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '其他', description: 'el-input-number 的属性、事件', type: 'https://element-plus.org/zh-CN/component/input-number.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95' },
    ],
}
</script>
