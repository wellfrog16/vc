<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'label', description: '标签文本', type: 'string', defaultValue: '-' },
        { param: 'tooltip-props', description: 'el-tooltip 的属性', type: 'https://element-plus.org/zh-CN/component/tooltip#api' },
        { param: 'no-edit', description: '创建后无法修改的标记', type: 'boolean', defaultValue: 'false' },
        { param: 'no-edit-text', description: '创建后无法修改的提示文案', type: 'string', defaultValue: '创建后无法修改' },
        { param: '其他', description: 'info-tooltip 的属性', type: './info-tooltip.html' },
        { param: '其他', description: 'form-item 的属性、插槽、事件', type: 'https://element-plus.org/zh-CN/component/form#formitem-api' },
    ],
    events: [
        { name: 'click', description: 'icon 点击事件', param: 'code, label' },
    ],
}
</script>
