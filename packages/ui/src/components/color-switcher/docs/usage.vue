<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'size', description: 'icon 大小', type: 'string | number', defaultValue: '28' },
        { param: 'storageKey', description: '存储 key', type: 'string', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: 'vc-primary-color' },
    ],
    events: [
        { name: 'change', description: '颜色改变的值', param: 'color' },
    ],
}
</script>
