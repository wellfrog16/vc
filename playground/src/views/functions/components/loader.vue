<template>
    <el-space direction="vertical" size="large" alignment="left">
        <canvas ref="containerRef" />
    </el-space>
</template>

<script setup lang="ts">
import { loader } from '@wfrog/vc-utils'

const containerRef = useTemplateRef('containerRef')

onMounted(async () => {
    const QRCode = await loader.loadCdnSingle('QRCode')
    QRCode.toCanvas(containerRef.value, 'test', { width: 128, height: 128, margin: 1 })
})
</script>
