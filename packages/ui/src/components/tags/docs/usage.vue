<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string[]', defaultValue: '[]' },
        { param: 'regexp', description: 'tag 值的校验规则', type: 'RegExp', defaultValue: '/\\S+/' },
        { param: 'limit', description: 'tag 的数量限制', type: 'number', defaultValue: '5' },
        { param: 'error-message', description: '校验错误的提示', type: 'string', defaultValue: '' },
        { param: 'same-message', description: '创建相同内容 tag 的提示', type: 'string', defaultValue: '内容重复了' },
        { param: 'readonly', description: '只读模式', type: 'boolean', defaultValue: false },
        { param: 'value-format', description: '结果格式化', type: '(val: string | number) => string | number', defaultValue: 'val=>val' },
        { param: '其他', description: 'el-tag 的属性', type: 'hhttps://element-plus.org/zh-CN/component/tag#tag-api' },
    ],
    events: [
        { name: 'change', description: '值更新时触发，注意：非变化，只要更新就触发', param: '更新后的值' },
        { name: 'dragStart', description: '拖拽开始时触发', param: 'DragEvent' },
        { name: 'dragEnd', description: '拖拽结束时触发', param: 'DragEvent' },
    ],
}
</script>
