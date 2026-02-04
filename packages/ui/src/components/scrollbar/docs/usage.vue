<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'flex', description: '修改成 flex 布局', type: 'boolean', defaultValue: 'true' },
        { param: 'fill-height', description: '给最外层一个 10px 高度，以便在 flex 布局中占满剩余空间', type: 'boolean', defaultValue: 'true' },
        { param: 'padding', description: '设置内边距', type: 'number', defaultValue: '0' },
        { param: '其他', description: 'el-scrollbar 的属性、事件', type: 'https://element-plus.org/zh-CN/component/scrollbar#api' },
    ],
}
</script>
