<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'IValue | IValue[]', defaultValue: '-' },
        { param: '*options', description: '选项数据，同 el-radio 的 options', type: 'IOption', defaultValue: '[]' },
        { param: 'props', description: 'options 的配置，同 el-radio 的 props', type: 'object', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: `{value: 'value', label: 'label', disabled: 'disabled'}` },
        { param: 'multiple', description: '是否多选', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'el-radio 的属性、事件', type: 'https://element-plus.org/zh-CN/component/radio#radiogroup-api' },
        { param: '其他', description: 'el-checkbox 的属性、事件', type: 'https://element-plus.org/zh-CN/component/checkbox#checkbox-api' },
    ],
    types: [
        { param: 'IValue', description: 'string | number | boolean' },
        { param: 'IOption', description: 'Array<{[key: string]: any}> | string[]' },
    ],
}
</script>
