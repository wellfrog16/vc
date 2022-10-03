<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: '{ lng: string; lat: string }', defaultValue: '{ lng: \'\', lat: \'\' }' },
        { param: '*v-model:visible', description: '显示/隐藏', type: 'boolen', defaultValue: 'false' },
        { param: 'city', description: '地图默认显示的城市', type: 'string', defaultValue: '上海' },
        { param: 'ak', description: '百度地图的AK密钥', type: 'string', defaultValue: '-' },

    ],
    events: [
        { name: 'close', description: '对话框关闭的回调', param: '-' },
    ],
}
</script>
