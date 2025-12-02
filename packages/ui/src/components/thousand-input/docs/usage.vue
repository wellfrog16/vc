<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string', defaultValue: '-' },
        { param: 'v-model:format-value', description: '带有千分位的值', type: 'string', defaultValue: '-' },
        { param: 'option', description: '指令 v-thoursand 参数', type: 'IThousandOption', defaultValue: '下一行' },
        { param: '', description: '{ decimalScale: 2, integerScale: 12 }', type: ' - ', defaultValue: ' - ' },
        { param: 'padDecimal', description: 'format-value 小数位补0', type: 'boolean', defaultValue: 'true' },
        { param: '其他', description: 'el-input 属性', type: 'https://element-plus.org/zh-CN/component/input#api', defaultValue: '-' },
    ],
    types: [
        { param: 'IThousandOption', description: '{ decimalScale: 小数位长度, integerScale: 整数位长度 }' },
    ],
    events: [
        { name: 'change', description: '仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时以及 option 变化时触发', param: '[value, format-value]' },
    ],
}
</script>
