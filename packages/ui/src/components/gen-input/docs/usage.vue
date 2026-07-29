<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string | number', defaultValue: '-' },
        { param: 'checkbox-label', description: 'checkbox 的 label', type: 'string', defaultValue: '自动生成' },
        { param: 'default-checked', description: '默认选择自动生成的 checkbox', type: 'boolean', defaultValue: 'true' },
        { param: 'placeholder', description: '输入框 placeholder', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '请输入唯一编码' },
        { param: 'gen-placeholder', description: '自动生成时输入框 placeholder', type: 'string', defaultValue: '根据规则自动生成' },
        { param: '其他', description: 'el-input 的属性、事件', type: 'https://element-plus.org/zh-CN/component/input#api' },
    ],
}
</script>
