<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'data', description: '数据', type: 'IExplorerListItem[]', defaultValue: '[]' },
        { param: 'actions', description: '操作按钮列表', type: '(create | modify | remove)[]', defaultValue: '[]' },
        { param: 'loading', description: '是否加载中', type: 'boolean', defaultValue: 'false' },
        { param: 'loadingText', description: '加载中的文本', type: 'string', defaultValue: '数据加载中...' },
        { param: 'emptyText', description: '空数据时的文本', type: 'string', defaultValue: '没有数据' },
        { param: 'highlight-current', description: '是否高亮当前项', type: 'boolean', defaultValue: 'true' },
        { param: 'filter-method', description: '自定义搜索方法', type: 'Fun1', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '对 label 进行搜索' },
        { param: 'confirm-params', description: '删除确认参数', type: 'Fun2', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '() => { msg:\'确定要删除 label 吗？\' }' },
    ],
    types: [
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
    slots: [
        { name: 'default', description: '列表项目，参数 data: IExplorerListItem, index: number' },
    ],
}
</script>
