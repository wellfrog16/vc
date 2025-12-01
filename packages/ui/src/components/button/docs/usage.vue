<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'time', description: '点击时的节流间隔，单位毫秒', type: 'number', defaultValue: '800' },
        { param: 'confirm', description: '是否显示二次确认框，设置 none 则不二次确认', type: 'IConfirmInfo', defaultValue: '下一行' },
        { param: '-', rowType: 'defaultValue', description: '{ type: \'messagebox\', title: \'提示\', confirmButtonText: \'确定\', cancelButtonText: \'取消\', msg: \'确认要删除这条数据吗\' }' },
        { param: '*icon', description: 'icon 的设置信息', type: 'IIconOption', defaultValue: '-' },
        { param: '其他', description: 'el-button 的属性、事件', type: 'https://element-plus.org/zh-CN/component/button#button-api', defaultValue: '-' },
    ],
    types: [
        { param: 'IIconOption', description: '{ type: el | svg | awesome, name: string, position: left | right }' },
        { param: 'IConfirmInfo', description: '{ type: popconfirm | messagebox | none, title?: string, confirmButtonText?: string, cancelButtonText?: string, msg?: string }' },
    ],
}
</script>
