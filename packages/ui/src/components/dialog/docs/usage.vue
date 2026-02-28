<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'showFullscreen', description: '是否显示最大化的按钮', type: 'boolean', defaultValue: 'true' },
        { param: 'showDefaultFooter', description: '是否显示默认带关闭的 footer', type: 'boolean', defaultValue: 'false' },
        { param: 'lazy', description: '是否使用懒渲染', type: 'boolean', defaultValue: 'true' },
        { param: 'fullscreen', description: '是否打开时默认全屏', type: 'boolean', defaultValue: 'false' },
        { param: 'height', description: '滚动条区域高度', type: 'number | string', defaultValue: '-' },
        { param: 'max-height', description: '滚动条区域最大高度，未到最大高度自适应', type: 'number | string', defaultValue: '80vh' },
        { param: 'fullscreen-height', description: '全屏大小时，内容区域的高度', type: 'number | string', defaultValue: '-' },
        { param: 'padding', description: '内容区域的内边距', type: 'number', defaultValue: '16' },
        { param: 'boxPadding', description: '内容区域上下部分是否有模拟的内边距', type: 'boolean', defaultValue: 'true' },
        { param: '其他', description: 'el-dialog 的属性、事件、插槽', type: 'https://element-plus.org/zh-CN/component/dialog#api', defaultValue: '-' },
    ],
}
</script>
