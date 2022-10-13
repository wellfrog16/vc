<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：图片上传">
            <HUploadFile
                :cropper="cropper"
                :http-request="httpRequest"
                :image-options="{
                    width: '400px',
                    height: '200px',
                    iconSize: 30,
                    icon: 'Picture',
                }"
                @error="handleError"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：裁剪">
            <HChoiceBoolean v-model="cropper" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="" />
        <ElDescriptionsItem label="展示区：按钮上传">
            <HUploadFile
                :http-request="httpRequest"
                type="button"
                :button-options="{
                    type: 'primary',
                }"
                @error="handleError"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：自定义上传">
            <HUploadFile
                :http-request="httpRequest"
                type="button"
                @error="handleError"
            >
                <span>可以自定义上传控件，点我上传</span>
            </HUploadFile>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="本地Blob地址"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem, ElMessage } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HUploadFile from '../index.vue'

const result = ref('')
const cropper = ref(false)
const httpRequest = (file: File, done: () => void, localUrl: string) => {
    result.value = localUrl
    setTimeout(() => {
        done()
    }, 1000)
}
const handleError = (message: string) => {
    ElMessage({ message, type: 'error' })
}
</script>
