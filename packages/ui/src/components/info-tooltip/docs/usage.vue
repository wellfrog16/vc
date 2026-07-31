<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'content', description: '内容', type: 'string', defaultValue: '-' },
        { param: 'code', description: '编码，用于 config-provider 配置', type: 'string', defaultValue: '-' },
        { param: 'letter', description: '字母，icon 为空时启用', type: 'string', defaultValue: '-' },
        { param: 'max-width', description: 'tooltip 内容的最大宽度', type: 'string', defaultValue: '400px' },
        { param: 'icon', description: 'iconify 图标', type: 'string', defaultValue: 'carbon:help' },
        { param: 'icon-class', description: 'icon 的 class', type: 'string', defaultValue: '-' },
        { param: 'offset-y', description: '垂直偏移量', type: 'string', defaultValue: '-4px' },
        { param: '其他', description: 'el-tooltip 的属性、事件', type: 'https://element-plus.org/zh-CN/component/tooltip#api' },
    ],
    events: [
        { name: 'click', description: 'icon 点击事件', param: 'code' },
    ],
}
</script>
