<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'boolean | number', defaultValue: 'false' },
        { param: 'text', description: '是否的文案', type: 'string[]', defaultValue: '[是, 否]' },
        { param: 'value-type', description: '值的类型', type: 'boolean | number', defaultValue: 'boolean' },
    ],
}
</script>
