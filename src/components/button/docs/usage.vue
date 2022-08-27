<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*icon', description: 'icon 的设置信息', type: 'IIconOption', defaultValue: '-' },
        { param: '其他', description: 'el-button 的属性', type: 'https://element-plus.gitee.io/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7', defaultValue: '-' },
    ],
    types: [
        { param: 'IIconOption', description: '{ type: el | svg | awesome, name: string, position: left | right }' },
    ],
}
</script>
