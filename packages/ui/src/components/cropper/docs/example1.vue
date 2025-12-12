<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcCropper ref="cropperRef" :image="imgSrc" :option="cropperOption" container-width="100%" @init="handleInit" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            <div ref="resultRef" :class="$style.result" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="操作">
            <ElLink :href="downloadLink" download="cropper.jpg" :underline="false">
                <ElButton type="primary" :icon="Download">下载</ElButton>
            </ElLink>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import type ICropper from 'cropperjs'
import { Download } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import VcCropper from '../cropper.vue'

const cropperRef = useTemplateRef('cropperRef')
const resultRef = useTemplateRef('resultRef')
const downloadLink = ref('')

const imgSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'

function handleDownload() {
    if (!cropperRef.value) { return }
    const canvas = cropperRef.value.getCroppedCanvas()
    downloadLink.value = canvas?.toDataURL() || ''
}

// const handleCropper = async () => {
//     if (!cropperRef.value) { return }
//     const blobData = await cropperRef.value.getBlobData()
//     console.log(blobData)
// }

const cropperOption = computed<ICropper.Options>(() => ({
    aspectRatio: 16 / 9,
    preview: resultRef.value || undefined,
    cropmove: debounce(handleDownload, 1000),
}))

const handleInit = () => handleDownload()
</script>

<style lang="scss" module>
.result {
    width: 100%;
    max-width: 400px;
    height: 300px;
    overflow: hidden;
}
</style>
