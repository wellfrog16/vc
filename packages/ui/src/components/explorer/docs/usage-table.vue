<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '表格数据', type: 'any[]', defaultValue: '[]' },
        { param: 'highlight-current', description: '是否高亮当前项', type: 'boolean', defaultValue: 'true' },
        { param: 'column-config', description: '列配置', type: 'IColumnConfig[]', defaultValue: '[]' },
        { param: 'column-render', description: '列渲染函数', type: '(column: IColumnConfig) => VNode', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '(column: IColumnConfig) => h(ElTableColumn, column)' },
        { param: '其他', description: 'el-table 的属性、事件', type: 'https://element-plus.org/zh-CN/component/table#api' },
    ],
    types: [
        { param: 'IColumnConfig', description: '{ label: string, prop: string, width?: number, widthType: width | minWidth, visible?: boolean, align: left | center | right, fixed?: left | right }' },
    ],
}
</script>
