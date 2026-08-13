<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '数据', type: 'TreeComponentProps[\'data\']', defaultValue: '[]' },
        { param: 'treeProps', description: '传递给 el-tree 的 props', type: 'TreeComponentProps', defaultValue: '{}' },
        { param: 'actions', description: '操作按钮列表', type: '(create | modify | remove)[]', defaultValue: '[]' },
        { param: 'highlight-current', description: '是否高亮当前节点', type: 'boolean', defaultValue: 'true' },
        { param: 'cancel-highlight', description: '点击已高亮 item 是否取消高亮', type: 'boolean', defaultValue: 'false' },
        { param: 'default-expand-all', description: '是否默认展开所有节点', type: 'boolean', defaultValue: 'true' },
        { param: 'disabled', description: '是否禁用', type: 'IDisabled', defaultValue: 'false' },
        { param: 'filter-method', description: '自定义搜索方法', type: 'Fun1', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: 'el-tree 的 filter-node-method 参数' },
        { param: 'confirm-params', description: '删除确认参数', type: 'Fun2', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '() => { msg:\'确定要删除 label 吗？\' }' },
        { param: '其他', description: 'scrollbar 的 API', type: './scrollbar.html#api', defaultValue: '-' },
    ],
    types: [
        { param: 'IDisabled', description: 'boolean | ((action: string, node: Node) => boolean)' },
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
