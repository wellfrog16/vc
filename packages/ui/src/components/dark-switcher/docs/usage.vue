<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: 'initialValue', description: '初始值', type: 'auto | dark | light', defaultValue: 'auto' },
        { param: 'size', description: 'icon 大小', type: 'string | number', defaultValue: '28' },
        { param: 'storageKey', description: '存储 key', type: 'string', defaultValue: 'vc-dark' },
        { param: 'duration', description: '过渡时间', type: 'number', defaultValue: '850' },
    ],
    events: [
        { name: 'change', description: '值改变时触发', param: '是否是 dark' },
    ],
}
</script>
