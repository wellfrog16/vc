<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'Value | Value[]', defaultValue: '-' },
        { param: '*multiple', description: '是否多选', type: 'boolean', defaultValue: 'false' },
        { param: '*options', description: '树形结构数据，参考 el-cascader ，可以是 Promise 数据', type: 'ITreeOption | (() => Promise<ITreeOption>)', defaultValue: '[]' },
        { param: '-', description: '-', type: 'https://element-plus.gitee.io/zh-CN/component/cascader.html#cascader-%E5%B1%9E%E6%80%A7', defaultValue: '-' },
        { param: 'placeholder', description: 'placeholder', type: 'string', defaultValue: '请选择' },
        { param: 'loadingText', description: '加载异步数据时的文本', type: 'string', defaultValue: '加载中' },
        { param: 'emptyText', description: '复选未选择时，已选数据面板展示的文案', type: 'string', defaultValue: '尚未选择' },
        { param: 'name', description: '使用 localStorage 缓存时的 key，空不缓存', type: 'string', defaultValue: '' },
        { param: 'expires', description: '对数据进行 localStorage 缓存，指定日期到期或者 X 秒后失效。不缓存设置为 0', type: 'Date | number', defaultValue: '7200' },
        { param: '其他', description: 'el-cascader 的属性、事件', type: '-', defaultValue: '-' },
    ],
    types: [
        { param: 'Value', description: 'string | number | boolean' },
        { param: 'ITreeOption', description: '{label: string, value: Value, children: ITreeOption[], ...其他}' },
    ],
    events: [
        { name: 'init', description: 'options 为异步时，加载完成的回调', param: 'options' },
        { name: 'change', description: '选择变化时的触发', param: 'value, node' },
    ],
}
</script>
