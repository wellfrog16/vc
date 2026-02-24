<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'search-placeholder', description: '搜索框占位符', type: 'string', defaultValue: '请输入搜索内容' },
        { param: 'tools', description: '工具栏', type: 'ToolsType', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '() => [\'refresh\', \'fullscreen\', \'setting\']' },
        { param: 'group', description: '分组，用于和 panel 联动进行全屏切换', type: 'string', defaultValue: '-' },
        { param: 'layout', description: '布局', type: 'card | list', defaultValue: 'list' },
        { param: 'create', description: '创建按钮', type: 'boolean', defaultValue: 'false' },
        { param: 'create-text', description: '创建按钮文字', type: 'string', defaultValue: '新增' },
        { param: 'throttle', description: '操作防抖时间', type: 'number', defaultValue: '800' },
        { param: 'tools-key', description: '工具栏唯一 key，用于 storage 的存储', type: 'string', defaultValue: '' },
        { param: 'column-reset-visible', description: '列表设置里重置按钮是否显示', type: 'boolean', defaultValue: 'true' },
        { param: 'column-setter-size', description: '列表设置里列宽调整器大小', type: 'small | default | large', defaultValue: 'small' },
        { param: 'column-to-storage', description: '是否将列设置保存到 storage', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'el-switch 的属性、事件', type: 'https://element-plus.org/zh-CN/component/switch#api' },
    ],
    types: [
        { param: 'ToolsType', description: '(\'search\' | \'refresh\' | \'fullscreen\' | \'setting\' | \'layout\')[]' },
    ],
    events: [
        { name: 'create', description: '创建事件', param: '-' },
        { name: 'refresh', description: '刷新事件', param: '-' },
        { name: 'fullscreen', description: '全屏切换事件', param: 'boolean' },
        { name: 'setting', description: '设置事件', param: 'boolean' },
        { name: 'search', description: '搜索事件', param: 'string' },
        { name: 'layout', description: '布局切换事件', param: 'card | list' },
        { name: 'column-reset', description: '列设置重置事件', param: '-' },
    ],
    slots: [
        { name: 'default', description: '左侧区域' },
    ],
}
</script>
