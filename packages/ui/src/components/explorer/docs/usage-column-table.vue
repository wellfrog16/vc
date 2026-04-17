<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'v-model:data', description: '表格数据', type: 'any[]', defaultValue: '[]' },
        { param: 'size', description: '列表设置里列宽调整器大小', type: 'small | default | large', defaultValue: 'small' },
        { param: 'mode', description: '列表模式', type: 'easy | full', defaultValue: 'easy' },
        { param: 'height', description: '表格高度', type: 'string | number', defaultValue: '320' },
        { param: 'highlight-current', description: '是否高亮当前项', type: 'boolean', defaultValue: 'false' },
        { param: 'empty-column', description: '空列设置', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'el-table 的属性、事件', type: 'https://element-plus.org/zh-CN/component/table#api' },
    ],
    events: [
        { name: 'update:data', description: '表格数据更新事件', param: 'any[]' },
    ],
    methods: [
        { name: 'tableRef', description: '表格实例', param: '-' },
        { name: 'init', description: '执行 sorttable 初始化', param: '-' },
        { name: 'rerender', description: '重新渲染表格', param: '-' },
    ],
    slots: [
        { name: 'append', description: '作用同 el-table 的 append 插槽' },
    ],
}
</script>
