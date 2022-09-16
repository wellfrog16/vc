<template>
    <div>
        <h4>普通模式</h4>
        <Wrapper>
            <ElDescriptionsItem label="展示区">
                <HCropper ref="cropperRef" :image="imgSrc" :option="cropperOption" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="结果">
                <div ref="result1Ref" :class="$style.result" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="操作">
                <ElSpace>
                    <!-- <HChoice v-model="aspectRatio" :options="aspectRatioOptions" @change="handleAspectRatioChange" /> -->
                    <ElLink :href="downloadLink" download="cropper.jpg">下载</ElLink>
                    <ElButton @click="handleCropper">裁剪</ElButton>
                </ElSpace>
            </ElDescriptionsItem>
        </Wrapper>
        <h4>对话框模式</h4>
        <Wrapper>
            <ElDescriptionsItem label="展示区">
                <HCropper ref="cropperRef" :image="imgSrc" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="结果">
                <!-- <div ref="result1Ref" :class="$style.result" /> -->
            </ElDescriptionsItem>
            <ElDescriptionsItem label="操作">
                <ElSpace>
                <!-- <HChoice v-model="aspectRatio" :options="aspectRatioOptions" @change="handleAspectRatioChange" /> -->
                <!-- <ElButton @click="handleCropper">裁剪</ElButton> -->
                </ElSpace>
            </ElDescriptionsItem>
        </Wrapper>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElLink, ElSlider, ElSpace } from 'element-plus'
import { debounce } from 'lodash-es'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HCropper from '../index.vue'
import type ICropper from 'cropperjs'

const cropperRef = ref<InstanceType<typeof HCropper>>()
const result1Ref = ref<HTMLDivElement>()
const downloadLink = ref('')

const imgSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'

const handleDownload = () => {
    console.log(999)
    if (!cropperRef.value) { return }
    const canvas = cropperRef.value.getCroppedCanvas()
    downloadLink.value = canvas?.toDataURL() || ''
}

const handleCropper = async () => {
    if (!cropperRef.value) { return }
    const blobData = await cropperRef.value.getBlobData()
    console.log(blobData)
}

const cropperOption = computed<ICropper.Options>(() => ({
    aspectRatio: 16 / 9,
    preview: result1Ref.value,
    cropmove: debounce(handleDownload, 1000),
}))

// const handleAspectRatioChange = (val: number) => {
//     if (!cropperRef.value) { return }
//     cropperRef.value.instance?.setAspectRatio(val)
// }
</script>

<style lang="scss" module>
.result {
    width: 400px;
    height: 300px;
    overflow: hidden;
}
</style>
