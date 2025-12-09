<template>
    <Wrapper>
        <ElDescriptionsItem label="操作">
            <div>
                <ElButton @click="handleToggleVisible">打开</ElButton>
                <HCropper v-model:visible="visible" :image="imgSrc" :option="cropperOption" dialog @finished="handleFinished" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            <div ref="resultRef" :class="$style.result" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElButton, ElDescriptionsItem } from 'element-plus'
import { ref, useTemplateRef } from 'vue'

import Wrapper from '@/components/example-wrapper.vue'
import HCropper from '../cropper.vue'

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
