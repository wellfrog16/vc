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
        { param: 'labelPosition', description: '标签位置', type: 'FormProps["labelPosition"]', defaultValue: 'top' },
        { param: 'editable', description: '是否可编辑', type: 'boolean', defaultValue: 'true' },
        { param: 'editing', description: '是否编辑中', type: 'boolean', defaultValue: 'true' },
        { param: 'loading', description: '是否加载中', type: 'boolean', defaultValue: 'false' },
        { param: 'disabled', description: '是否禁用表单', type: 'boolean', defaultValue: 'false' },
    ],
    types: [
        { param: 'IForm', description: '{ fields: Record<string, any>, rules: Record<string, any> }' },
    ],
    methods: [
        { name: 'formRef', description: '表单实例', param: 'FormInstance' },
    ],
    events: [
        { name: 'update:visible', description: 'visible 变化事件', param: 'visible' },
        { name: 'cancel', description: '取消事件', param: '-' },
        { name: 'edit', description: '编辑事件', param: '-' },
        { name: 'save', description: '保存事件', param: 'data' },
    ],
    slots: [
        { name: 'default', description: '表单内容插槽' },
        { name: 'title', description: '表单标题插槽' },
        { name: 'action', description: '表单操作按钮插槽' },
    ],
}
</script>
