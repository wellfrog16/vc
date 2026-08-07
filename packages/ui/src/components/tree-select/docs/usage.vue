<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'Value | Value[]', defaultValue: '-' },
        { param: '*multiple', description: '是否多选', type: 'boolean', defaultValue: 'false' },
        { param: '*options', description: '树形结构数据，参考 el-tree', type: 'ITreeOption', defaultValue: '[]' },
        { param: '-', description: '-', type: 'https://element-plus.org/zh-CN/component/tree#attributes', defaultValue: '-' },
        { param: 'checkStrictly', description: '是否严格的遵守父子不互相关联的做法', type: 'boolean', defaultValue: 'false' },
        { param: 'width', description: '宽度', type: 'string | number', defaultValue: '-' },
        { param: 'placeholder', description: 'placeholder', type: 'string', defaultValue: '请选择' },
        { param: 'emptyText', description: '树形面板无数据时展示的文案', type: 'string', defaultValue: '暂无数据' },
        { param: 'filterEmptyText', description: '级联选择器过滤无结果时展示的文案', type: 'string', defaultValue: '没有匹配到数据' },
        { param: 'props', description: 'ElTree / ElCascader 共用的 props 参数，会覆盖内置功能', type: 'Record<string, any>', defaultValue: '-' },
        { param: '-', description: '-', type: 'https://element-plus.org/zh-CN/component/tree#props', defaultValue: '-' },
        { param: 'filterable', description: '是否可过滤', type: 'boolean', defaultValue: 'false' },
        { param: 'clearable', description: '是否可清空', type: 'boolean', defaultValue: 'true' },
        { param: '其他', description: 'el-tree / el-cascader 的属性、事件', type: 'https://element-plus.org/zh-CN/component/tree-select#attributes', defaultValue: '-' },
    ],
    types: [
        { param: 'Value', description: 'string | number' },
        { param: 'ITreeOption', description: '{label: string, value: Value, children: ITreeOption[], ...其他}' },
    ],
    events: [
        { name: 'change', description: '选择变化时的触发', param: 'value, node' },
        { name: 'blur', description: '输入框失焦时触发', param: 'event' },
    ],
}
</script>
