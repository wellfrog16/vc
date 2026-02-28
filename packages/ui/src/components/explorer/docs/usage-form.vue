<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'title', description: '表单标题', type: 'string', defaultValue: '-' },
        { param: 'icon', description: '表单标题前的 icon，使用 iconify', type: 'string', defaultValue: 'fluent:form-48-regular' },
        { param: 'form', description: '表单配置', type: 'IForm', defaultValue: '-' },
        { param: 'form-props', description: '表单属性', type: 'FormProps', defaultValue: '-' },
        { param: 'initialValues', description: '初始值', type: 'Record<string, any>', defaultValue: '{}' },
        { param: 'autoInitial', description: '是否用 form.fields 自动初始化表单值', type: 'boolean', defaultValue: 'true' },
        { param: 'defaultEditing', description: '是否默认编辑模式', type: 'boolean', defaultValue: 'false' },
        { param: 'onCancel', description: '取消按钮点击事件', type: 'ICancel', defaultValue: '()=>{}' },
        { param: 'onSave', description: '保存按钮点击事件', type: 'ISave', defaultValue: '()=>{}' },
    ],
    types: [
        { param: 'IForm', description: '{ fields: Record<string, any>, rules: Record<string, any> }' },
        { param: 'ICancel', description: '() => void | Promise<void>' },
        { param: 'ISave', description: '(fields: Record<string, any>) => void | Promise<void>' },
    ],
    slots: [
        { name: 'default', description: '表单内容插槽' },
        { name: 'title', description: '表单标题插槽' },
        { name: 'action', description: '表单操作按钮插槽' },
    ],
}
</script>
