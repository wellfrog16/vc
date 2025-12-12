<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'Value | Value[]', defaultValue: '' },
        { param: 'value-format', description: '绑定值的格式', type: 'https://element-plus.org/zh-CN/component/date-picker#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F', defaultValue: 'YYYY-MM-DD' },
        { param: 'limit-days', description: '限制的可选天数，可以为负值', type: 'number', defaultValue: '3' },
        { param: 'include-today', description: '是否包含当天，即当天为第一天', type: 'boolen', defaultValue: 'false' },
    ],
    types: [
        { param: 'Value', description: 'string | Date' },
    ],
    events: [
        { name: 'change', description: '选择发生改变时触发', param: '更新后的值' },
    ],
}
</script>
