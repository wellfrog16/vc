<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HCropper ref="cropperRef" :image="imgSrc" :option="cropperOption" container-width="100%" @init="handleInit" />
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
import { ElButton, ElDescriptionsItem, ElLink } from 'element-plus'
import { debounce } from 'lodash-es'
import { computed, ref } from 'vue'
import Wrapper from '@/components/example-wrapper.vue'
import HCropper from '../cropper.vue'

// const cropperRef = ref<InstanceType<typeof HCropper>>()
const cropperRef = ref<any>()
const resultRef = ref<HTMLDivElement>()
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
    preview: resultRef.value,
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
