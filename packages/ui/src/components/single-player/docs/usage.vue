<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
import Document from '@/components/document.vue'

const documentData = {
    params: [
        { param: 'width', description: '宽度', type: 'number', defaultValue: '300' },
        { param: 'mediaUrl', description: '音频地址', type: 'string', defaultValue: '-' },
    ],
    methods: [
        { name: 'togglePlay', param: '-', description: '切换播放和暂停' },
    ],
    events: [
        { name: 'error', description: '播放失败时回调', param: '-' },
    ],
}
</script>
