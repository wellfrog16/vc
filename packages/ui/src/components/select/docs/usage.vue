<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'IValue | IValue[]', defaultValue: '' },
        { param: '*options', description: '选项数据，同 el-radio 的 options', type: 'IOption', defaultValue: '[]' },
        { param: 'props', description: 'options 的配置，同 el-radio 的 props', type: 'object', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: `{value: 'value', label: 'label', disabled: 'disabled'}` },
        { param: 'block', description: '内联还是块级展示', type: 'boolean', defaultValue: 'false' },
        { param: 'width', description: '宽度', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '内联240px；块级100%' },
        { param: '其他', description: 'el-select 的属性、事件', type: 'https://element-plus.org/zh-CN/component/select#select-api' },
    ],
    types: [
        { param: 'IValue', description: 'string | number | boolean' },
        { param: 'IOption', description: 'Array<{[key: string]: any}> | string[]' },
    ],
}
</script>
