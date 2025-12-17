<template>
    <el-space direction="vertical" size="large" alignment="left">
        <img :src="imgSrc" width="300">
        <el-text>原始尺寸：{{ result }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
import { imageSize } from '@wfrog/vc-utils'

const imgSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
const result = ref('')

onMounted(async () => {
    const size = await imageSize(imgSrc)
    result.value = `${size.width} x ${size.height}`
})
</script>
