<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'stopHeight', description: '滚动条离开底部多少高度时，停止滚动', type: 'number', defaultValue: '30' },
        { param: 'keepBottom', description: '强制滚动条保持在底部', type: 'boolean', defaultValue: 'false' },
        { param: 'backbottomClassName', description: 'backbottom 组件的 className', type: 'string', defaultValue: '-' },
        { param: 'backbottomProps', description: 'backbottom 组件的 props', type: '下一行', defaultValue: '-' },
        { param: '-', rowType: 'paramType', description: '仅支持 visibilityHeight 和 bottom' },
    ],
    slots: [
        { name: 'default', description: '内容区域' },
        { name: 'backbottom', description: '返回底部组件的插槽' },
    ],
}
</script>
