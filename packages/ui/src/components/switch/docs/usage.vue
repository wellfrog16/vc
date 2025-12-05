<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'boolean | string | number', defaultValue: '-' },
        { param: 'confirmTitle', description: 'confirm 的标题', type: 'string', defaultValue: '确认切换吗？' },
        { param: 'confirm', description: '是否开启二次确认', type: 'boolean', defaultValue: 'false' },
        { param: 'className', description: 'el-switch 的 className', type: 'string', defaultValue: '-' },
        { param: 'confirmProps', description: 'el-popconfirm 的属性、事件', type: 'https://element-plus.org/zh-CN/component/popconfirm#api' },
        { param: '其他', description: 'el-switch 的属性、事件', type: 'https://element-plus.org/zh-CN/component/switch#api' },
    ],
}
</script>
