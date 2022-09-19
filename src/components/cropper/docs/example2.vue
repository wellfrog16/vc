<template>
    <Wrapper>
        <ElDescriptionsItem label="操作">
            <div>
                <ElButton @click="handleToggleVisible">打开</ElButton>
                <HCropper ref="cropperRef" v-model:visible="visible" :image="imgSrc" :option="cropperOption" dialog @finished="handleFinished" />
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            <div ref="resultRef" :class="$style.result" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HCropper from '../index.vue'

const cropperRef = ref<InstanceType<typeof HCropper>>()
const resultRef = ref<HTMLDivElement>()
const visible = ref(false)

const imgSrc = 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'

const handleToggleVisible = () => {
    visible.value = !visible.value
}

const handleFinished = (canvas: HTMLCanvasElement, blob: Blob) => {
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
