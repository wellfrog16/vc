<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string', defaultValue: '-' },
        { param: 'v-model:format-value', description: '带有前缀千分位的值', type: 'string', defaultValue: '-' },
        { param: 'code', description: '旗子的 code', type: 'ICurrencyCode | ICurrencyCode[]', defaultValue: '-' },
        { param: 'flag', description: '是否现实旗子', type: 'boolean', defaultValue: 'false' },
        { param: 'prefix', description: '是否显示前缀', type: 'boolean', defaultValue: 'true' },
        { param: 'prepend', description: '是否显示前置内容', type: 'boolean', defaultValue: 'true' },
        { param: 'append', description: '是否显示后置内容', type: 'boolean', defaultValue: 'false' },
        { param: '其他', description: 'thousand-input 的 API', type: './thousand-input.html#api', defaultValue: '-' },
    ],
    types: [
        { param: 'ICurrencyCode', description: '\'CNY\' | \'USD\' | \'JPY\' | \'EUR\' | \'TWD\' | \'KRW\'' },
    ],
}
</script>
