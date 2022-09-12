<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string[]', defaultValue: '[]' },
        { param: 'regexp', description: 'tag值的校验规则', type: 'RegExp', defaultValue: '/\\S+/' },
        { param: 'error-message', description: '校验错误的提示', type: 'string', defaultValue: '' },
        { param: 'readonly', description: '只读模式', type: 'boolean', defaultValue: false },
        { param: 'value-format', description: '结果格式化', type: '(val: string | number) => string | number', defaultValue: 'val=>val' },
    ],
    events: [
        { name: 'change', description: '值更新时触发，注意：非变化，只要更新就触发', param: '更新后的值' },
    ],
}
</script>
