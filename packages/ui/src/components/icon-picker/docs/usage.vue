<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string', defaultValue: '-' },
        { param: 'collection', description: '默认显示的图标合集', type: 'string', defaultValue: 'carbon' },
        { param: 'collections', description: '指定使用的图标合集，空表示所有', type: 'string[]', defaultValue: '-' },
        { param: '其他', description: 'vc-input 的属性、事件', type: './input#api' },
    ],
}
</script>
