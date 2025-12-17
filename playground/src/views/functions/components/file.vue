<template>
    <div>
        <img :src="imgSrc" width="100">
        <div ref="containerRef" />
    </div>
</template>

<script setup lang="ts">
import { file } from '@wfrog/vc-utils'

const containerRef = useTemplateRef('containerRef')
const imgSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'

onMounted(async () => {
    const result = await file.imageToCanvas(imgSrc)
    result.style.width = '200px'
    containerRef.value!.appendChild(result)
})
</script>
