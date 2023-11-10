<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'time', description: '点击时的节流间隔，单位毫秒', type: 'number', defaultValue: '800' },
        { param: '*icon', description: 'icon 的设置信息', type: 'IIconOption', defaultValue: '-' },
        { param: '其他', description: 'el-button 的属性、事件', type: 'https://element-plus.gitee.io/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7', defaultValue: '-' },
    ],
    types: [
        { param: 'IIconOption', description: '{ type: el | svg | awesome, name: string, position: left | right }' },
    ],
}
</script>
