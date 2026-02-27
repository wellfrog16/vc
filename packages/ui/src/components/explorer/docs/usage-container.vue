<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'title', description: '标题', type: 'string', defaultValue: '-' },
        { param: 'icon', description: '标题前的 icon，使用 iconify', type: 'string', defaultValue: 'carbon:information-square' },
        { param: 'loading', description: '是否加载中', type: 'boolean', defaultValue: 'false' },
    ],
    slots: [
        { name: 'default', description: '表单内容插槽' },
        { name: 'title', description: '标题插槽' },
        { name: 'action', description: '操作插槽' },
    ],
}
</script>
