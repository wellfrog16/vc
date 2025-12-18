<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div ref="containerRef" />
    </el-space>
</template>

<script setup lang="ts">
import { renderTo } from '@wfrog/vc-utils'
import { ElText } from 'element-plus'

const containerRef = useTemplateRef('containerRef')

onMounted(() => {
    renderTo(containerRef.value!, ElText, {
        size: 'large',
        type: 'primary',
    }, {
        default: () => 'default slot',
    })
})
</script>
