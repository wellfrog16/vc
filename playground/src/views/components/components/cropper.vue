<template>
    <el-space size="large" direction="vertical" alignment="left">
        <div><ElButton @click="handleToggleVisible">打开裁剪器</ElButton></div>
        <div ref="resultRef" :class="$style.result" />
        <HCropper v-model:visible="visible" :image="imgSrc" :option="cropperOption" dialog @finished="handleFinished" />
    </el-space>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ref, useTemplateRef } from 'vue'

const resultRef = useTemplateRef('resultRef')
const visible = ref(false)

const imgSrc = 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'

function handleToggleVisible() {
    visible.value = !visible.value
}

function handleFinished(canvas: HTMLCanvasElement, blob: Blob) {
    if (!resultRef.value) { return }

    resultRef.value.childNodes.forEach(item => resultRef.value?.removeChild(item))
    resultRef.value.appendChild(canvas)
    console.log(blob)
}

const cropperOption = { aspectRatio: 16 / 9 }
</script>

<style lang="scss" module>
.result {
    width: 300px;
    font-size: 0;
    line-height: 0;

    canvas {
        width: 100%;
    }
}
</style>
