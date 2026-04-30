<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '数据', type: 'TreeComponentProps[\'data\']', defaultValue: '[]' },
        { param: 'treeProps', description: '传递给 el-tree 的 props', type: 'TreeComponentProps', defaultValue: '{}' },
        { param: 'actions', description: '操作按钮列表', type: '(create | modify | remove)[]', defaultValue: '[]' },
        { param: 'pending', description: '是否正在处理', type: 'boolean', defaultValue: 'false' },
        { param: 'loading', description: '是否加载中', type: 'boolean', defaultValue: 'false' },
        { param: 'loading-text', description: '加载中的文本', type: 'string', defaultValue: '数据加载中...' },
        { param: 'empty-text', description: '空数据时的文本', type: 'string', defaultValue: '没有数据' },
        { param: 'highlight-current', description: '是否高亮当前节点', type: 'boolean', defaultValue: 'true' },
        { param: 'default-expand-all', description: '是否默认展开所有节点', type: 'boolean', defaultValue: 'true' },
        { param: 'deep-watch', description: '是否深度监听 data 变化', type: 'boolean', defaultValue: 'false' },
        { param: 'filter-method', description: '自定义搜索方法', type: 'Fun1', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: 'el-tree 的 filter-node-method 参数' },
        { param: 'confirm-params', description: '删除确认参数', type: 'Fun2', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '() => { msg:\'确定要删除 label 吗？\' }' },
    ],
    types: [
        { param: 'TreeComponentProps', description: 'el-tree 的 props 类型' },
        { param: 'Fun1', description: '(keyword: string, item: IExplorerTreeItem) => boolean' },
        { param: 'Fun2', description: '(item: IExplorerTreeItem) => IButtonProps[\'confirm\']' },
    ],
    events: [
        { name: 'create', description: '创建按钮点击事件', param: 'value, Node' },
        { name: 'modify', description: '修改按钮点击事件', param: 'value, Node' },
        { name: 'remove', description: '删除按钮点击事件', param: 'value, Node' },
        { name: 'node-click', description: '节点点击事件', param: 'value, Node, ComponentInternalInstance | null, event: MouseEvent' },
    ],
    methods: [
        { name: 'getTreeRef', description: '获取 el-tree 的 ref', param: '() => ElTree' },
        { name: 'setActive', description: '设置当前节点', param: '(value: string | number) => void' },
    ],
    slots: [
        { name: 'node', description: '列表 node 操作按钮，参数 data: IExplorerTreeItem, index: number' },
        { name: 'label', description: '列表 label，参数 data: IExplorerTreeItem, index: number' },
        { name: 'extra-label', description: '列表 extra-label，参数 data: IExplorerTreeItem, index: number' },
        { name: 'action', description: '列表项操作按钮，参数 data: IExplorerTreeItem, index: number' },
    ],
}
</script>
