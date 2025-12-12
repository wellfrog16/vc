<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'Value | Value[]', defaultValue: '' },
        { param: '*source', description: '数据源', type: 'ISourceType', defaultValue: '-' },
        { param: '*type', description: '选择类型', type: 'P | C | PC | PCA', defaultValue: '-' },
        { param: 'hotIds', description: '热门省市', type: 'number[]', defaultValue: '-' },
        { param: 'hotText', description: '热门省市文案', type: 'string', defaultValue: '热门' },
        { param: 'history', description: '是否记录历史城市', type: 'boolean', defaultValue: 'false' },
        { param: 'historyText', description: '历史记录文案', type: 'string', defaultValue: '历史选择' },
        { param: 'historyMax', description: '历史记录最大数量', type: 'number', defaultValue: '6' },
        { param: 'historyStorageKey', description: '历史记录缓存KEY', type: 'string', defaultValue: '-' },
        { param: '-', rowType: 'defaultValue', description: '自定义 key 可以区分不同业务但是相同选择类型的历史选择' },
        { param: 'excludeIds', description: '从数据源里排除的id', type: 'number[]', defaultValue: '-' },
        { param: 'nameKey', description: '显示名称的 key', type: 'n | fn | string', defaultValue: 'n' },
        { param: 'disabled', description: '是否禁用', type: 'boolean', defaultValue: 'false' },
        { param: 'multiple', description: '是否多选', type: 'boolean', defaultValue: 'false' },
        { param: 'limit', description: '多选数量限制（非级联多选）', type: 'number', defaultValue: '-' },
        { param: 'placeholder', description: '占位符', type: 'string', defaultValue: '请选择' },
        { param: 'loadingText', description: '加载文案', type: 'string', defaultValue: '加载数据源中...' },
        { param: 'loadFailedText', description: '加载失败文案', type: 'string', defaultValue: '数据源加载失败' },
        { param: 'filterable', description: '是否可搜索', type: 'boolean', defaultValue: 'false' },
        { param: 'activeMark', description: '显示选择项的角标（非级联选择）', type: 'boolean', defaultValue: 'true' },
        { param: 'syncActive', description: '同步历史选择和热门省市的高亮（非级联选择）', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'el-cascader 的属性、事件', type: 'https://element-plus.org/zh-CN/component/cascader#cascader-api' },
    ],
    types: [
        { param: 'ISourceType', description: 'p | p-py | p-py-fn | pc | pc-py | pc-py-fn | pca | pca-py | pca-py-fn' },
    ],
    events: [
        { name: 'limit', description: '多选数量达到限制时的回调', param: 'value, item' },
        { name: 'change', description: '选择变化时的触发', param: 'item | items' },
    ],
}
</script>
