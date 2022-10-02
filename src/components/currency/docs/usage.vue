<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string', defaultValue: '-' },
        { param: 'v-model:format-value', description: '带有前缀千分位的值', type: 'string', defaultValue: '-' },
        { param: 'code', description: '旗子的 code', type: 'ICurrencyCode | ICurrencyCode[]', defaultValue: '-' },
        { param: 'flag', description: '是否现实旗子', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'thousand-input 的 api', type: './thousand-input.html', defaultValue: '-' },
    ],
    types: [
        { param: 'ICurrencyCode', description: '\'CNY\' | \'USD\' | \'JPY\' | \'EUR\' | \'TWD\' | \'KRW\'' },
    ],
}
</script>
