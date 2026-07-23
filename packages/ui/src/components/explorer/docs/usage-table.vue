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
        { param: 'empty', description: '是否显示空数据时的文本', type: 'boolean', defaultValue: 'true' },
        { param: 'empty-text', description: '空数据时的文本', type: 'string', defaultValue: '没有数据' },
        { param: 'highlight-current', description: '是否高亮当前项', type: 'boolean', defaultValue: 'true' },
        { param: 'custom-selection', description: '是否自定义选择框', type: 'radio | checkbox', defaultValue: '-' },
        { param: 'multiple-checked-key', description: '多选标记字段名', type: 'string', defaultValue: 'checked' },
        { param: 'startIndex', description: '起始索引', type: 'number', defaultValue: '0' },
        { param: 'rowKey', description: '行 key，用于单选和复选', type: 'string', defaultValue: 'id' },
        { param: 'column-config', description: '列配置', type: 'IColumnConfig[]', defaultValue: '[]' },
        { param: 'column-render', description: '列渲染函数', type: '(column: IColumnConfig) => VNode', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '(column: IColumnConfig) => h(ElTableColumn, column)' },
        { param: 'column-filter', description: '列过滤', type: '(column: IColumnConfig) => boolean', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '(column: IColumnConfig) => column.visible !== false' },
        { param: '其他', description: 'el-table 的属性、事件', type: 'https://element-plus.org/zh-CN/component/table#api' },
    ],
    types: [
        { param: 'IColumnConfig', description: '{ label: string, prop: string, width?: number, widthType: width | minWidth, visible?: boolean, align: left | center | right, fixed?: left | right }' },
    ],
    methods: [
        { name: 'setColumns', description: '设置列', param: '(columns: IColumnConfig[]) => void' },
        { name: 'setSelectedValue', description: '设置单选选中值', param: '(value: any) => void' },
        { name: 'setSelectedValues', description: '设置多选选中值', param: '(values: any) => void' },
        { name: 'clearSelection', description: '清除选中', param: '() => void' },
        { name: 'selectAll', description: '全选', param: '() => void' },

    ],
    events: [
        { name: 'column-event', description: '自定义 column 组件抛出的事件', param: 'column: IColumnConfig, row: Record<string, any>, value: Record<string, any>' },
        { name: 'single-selection-change', description: '单选事件', param: 'row: Record<string, any>' },
        { name: 'multiple-selection-change', description: '多选事件', param: 'row: Record<string, any>, values: Array<string | numver>' },
        { name: 'select-all', description: '全选/取消事件', param: 'checked: boolean, values: Array<string | numver>' },
        { name: 'selection-change', description: '当选择项发生变化时会触发该事件（多选）', param: 'selection: Record<string, any>[]' },
    ],
    slots: [
        { name: 'default', description: '列插槽，参数有 row 和 index，下同' },
        { name: 'operation', description: '操作插槽' },
        { name: 'empty', description: '空数据插槽' },
        { name: 'expand', description: '展开行插槽，prop 需要配置 expand 开头，如：expand-order-children' },
        { name: 'append', description: '作用同 el-table 的 append 插槽' },
    ],
}
</script>
