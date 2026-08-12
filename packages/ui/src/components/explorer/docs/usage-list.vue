<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '数据', type: 'IExplorerListItem[]', defaultValue: '[]' },
        { param: 'actions', description: '操作按钮列表', type: '(create | modify | remove)[]', defaultValue: '[]' },
        { param: 'highlight-current', description: '是否高亮当前项', type: 'boolean', defaultValue: 'true' },
        { param: 'cancel-highlight', description: '点击已高亮 item 是否取消高亮', type: 'boolean', defaultValue: 'false' },
        { param: 'show-checkbox', description: '是否显示复选框', type: 'boolean', defaultValue: 'false' },
        { param: 'disabled', description: '是否禁用', type: 'IDisabled', defaultValue: 'false' },
        { param: 'filter-method', description: '自定义搜索方法', type: 'Fun1', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '对 label 进行搜索' },
        { param: 'confirm-params', description: '删除确认参数', type: 'Fun2', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '() => { msg:\'确定要删除 label 吗？\' }' },
        { param: '其他', description: 'scrollbar 的 API', type: './scrollbar.html#api', defaultValue: '-' },
    ],
    types: [
        { param: 'IDisabled', description: 'boolean | ((action: string, item: IExplorerListItem) => boolean)' },
        { param: 'IExplorerListItem', description: '{ label: string, icon?: string, value: string | number, original?: any }' },
        { param: 'Fun1', description: '(keyword: string, item: IExplorerListItem) => boolean' },
        { param: 'Fun2', description: '(item: IExplorerListItem) => IButtonProps[\'confirm\']' },
    ],
    events: [
        { name: 'create', description: '创建按钮点击事件', param: 'value, IExplorerListItem' },
        { name: 'modify', description: '修改按钮点击事件', param: 'value, IExplorerListItem' },
        { name: 'remove', description: '删除按钮点击事件', param: 'value, IExplorerListItem' },
        { name: 'item-click', description: '列表项点击事件', param: 'value, IExplorerListItem' },
    ],
    methods: [
        { name: 'setActive', description: '设置当前节点', param: '(value: string | number) => void' },
    ],
    slots: [
        { name: 'item', description: '列表 item 操作按钮，参数 data: IExplorerListItem, index: number' },
        { name: 'label', description: '列表 label，参数 data: IExplorerListItem, index: number' },
        { name: 'extra-label', description: '列表 extra-label，参数 data: IExplorerListItem, index: number' },
        { name: 'action', description: '列表项操作按钮，参数 data: IExplorerListItem, index: number' },
    ],
}
</script>
