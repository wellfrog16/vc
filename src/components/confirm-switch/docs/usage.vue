<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'boolean | string | number', defaultValue: '-' },
        { param: 'confirmTitle', description: 'confirm 的标题', type: 'string', defaultValue: '确认切换吗？' },
        { param: 'className', description: 'el-switch 的 className', type: 'string', defaultValue: '-' },
        { param: '其他', description: 'el-switch 的属性、事件', type: 'https://element-plus.gitee.io/zh-CN/component/switch.html#%E5%B1%9E%E6%80%A7' },
    ],
    events: [
        { name: 'change', description: 'switch 状态发生变化时的回调函数', param: 'value' },
    ],
}
</script>
