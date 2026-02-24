<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '数据', type: 'TreeComponentProps[\'data\']', defaultValue: '[]' },
        { param: 'treeProps', description: '传递给 el-tree 的 props', type: 'TreeComponentProps', defaultValue: '{}' },
        { param: 'actions', description: '操作按钮列表', type: '(create | modify | remove)[]', defaultValue: '[]' },
        { param: 'loading', description: '是否加载中', type: 'boolean', defaultValue: 'false' },
        { param: 'loading-text', description: '加载中的文本', type: 'string', defaultValue: '数据加载中...' },
        { param: 'empty-text', description: '空数据时的文本', type: 'string', defaultValue: '没有数据' },
        { param: 'highlight-current', description: '是否高亮当前节点', type: 'boolean', defaultValue: 'true' },
        { param: 'default-expand-all', description: '是否默认展开所有节点', type: 'boolean', defaultValue: 'true' },
        { param: 'filter-method', description: '自定义搜索方法', type: 'Fun1', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: 'el-tree 的 filter-node-method 参数' },
        { param: 'confirm-params', description: '删除确认参数', type: 'Fun2', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '() => { msg:\'确定要删除 label 吗？\' }' },
    ],
    types: [
        { param: 'TreeComponentProps', description: 'el-tree 的 props 类型' },
        { param: 'Fun1', description: '(keyword: string, item: IExplorerListItem) => boolean' },
        { param: 'Fun2', description: '(item: IExplorerListItem) => IButtonProps[\'confirm\']' },
    ],
    events: [
        { name: 'create', description: '创建按钮点击事件', param: 'value, Node' },
        { name: 'modify', description: '修改按钮点击事件', param: 'value, Node' },
        { name: 'remove', description: '删除按钮点击事件', param: 'value, Node' },
        { name: 'node-click', description: '节点点击事件', param: 'value, Node, ComponentInternalInstance | null, event: MouseEvent' },
    ],
    slots: [
        { name: 'default', description: '列表项目，参数 data: IExplorerListItem, index: number' },
    ],
}
</script>
