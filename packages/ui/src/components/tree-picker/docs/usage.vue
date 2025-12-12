<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'Value | Value[]', defaultValue: '-' },
        { param: '*multiple', description: '是否多选', type: 'boolean', defaultValue: 'false' },
        { param: '*options', description: '树形结构数据，参考 el-cascader', type: 'ITreeOption', defaultValue: '[]' },
        { param: '-', description: '-', type: 'https://element-plus.org/zh-CN/component/cascader#%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E', defaultValue: '-' },
        { param: 'block', description: '内联还是块级展示', type: 'boolean', defaultValue: 'false' },
        { param: 'width', description: '宽度', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '内联214px；块级100%' },
        { param: 'placeholder', description: 'placeholder', type: 'string', defaultValue: '请选择' },
        { param: 'emptyText', description: '复选未选择时，已选数据面板展示的文案', type: 'string', defaultValue: '尚未选择' },
        { param: 'props', description: '级联选择器 CascaderPanel 的 props 参数，会覆盖内置功能', type: 'CascaderProps', defaultValue: '-' },
        { param: '-', description: '-', type: 'https://element-plus.org/zh-CN/component/cascader#cascaderprops', defaultValue: '-' },
        { param: '其他', description: 'el-cascader 的属性、事件', type: 'https://element-plus.org/zh-CN/component/cascader#cascader-attributes', defaultValue: '-' },
    ],
    types: [
        { param: 'Value', description: 'string | number | boolean' },
        { param: 'ITreeOption', description: '{label: string, value: Value, children: ITreeOption[], ...其他}' },
    ],
    events: [
        { name: 'change', description: '选择变化时的触发', param: 'value, node' },
    ],
}
</script>
