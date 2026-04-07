<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '表格数据', type: 'any[]', defaultValue: '[]' },
        { param: 'pending', description: '是否正在处理', type: 'boolean', defaultValue: 'false' },
        { param: 'loading', description: '是否加载中', type: 'boolean', defaultValue: 'false' },
        { param: 'loading-text', description: '加载中的文本', type: 'string', defaultValue: '数据加载中...' },
        { param: 'empty-text', description: '空数据时的文本', type: 'string', defaultValue: '没有数据' },
        { param: 'highlight-current', description: '是否高亮当前项', type: 'boolean', defaultValue: 'true' },
        { param: 'startIndex', description: '起始索引', type: 'number', defaultValue: '0' },
        { param: 'column-config', description: '列配置', type: 'IColumnConfig[]', defaultValue: '[]' },
        { param: 'column-render', description: '列渲染函数', type: '(column: IColumnConfig) => VNode', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '(column: IColumnConfig) => h(ElTableColumn, column)' },
        { param: '其他', description: 'el-table 的属性、事件', type: 'https://element-plus.org/zh-CN/component/table#api' },
    ],
    types: [
        { param: 'IColumnConfig', description: '{ label: string, prop: string, width?: number, widthType: width | minWidth, visible?: boolean, align: left | center | right, fixed?: left | right }' },
    ],
    methods: [
        { name: 'setColumns', description: '设置列', param: '(columns: IColumnConfig[]) => void' },
    ],
    events: [
        { name: 'column-event', description: '自定义 column 组件抛出的事件', param: 'column: IColumnConfig, row: Record<string, any>, value: Record<string, any>' },
    ],
    slots: [
        { name: 'default', description: '列插槽，参数有 row 和 index，下同' },
        { name: 'operation', description: '操作插槽' },
        { name: 'expand', description: '展开行插槽，prop 需要配置 expand 开头，如：expand-order-children' },
        { name: 'append', description: '作用同 el-table 的 append 插槽' },
    ],
}
</script>
