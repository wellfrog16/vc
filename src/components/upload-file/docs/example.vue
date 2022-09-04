<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：图片">
            <HUploadFile
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
        <ElDescriptionsItem label="展示区：按钮">
            <HUploadFile
                :http-request="httpRequest"
                type="button"
                :button-options="{
                    type: 'primary',
                }"
                @error="handleError"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：自定义">
            <HUploadFile
                :http-request="httpRequest"
                type="button"
                :button-options="{
                    type: 'primary',
                }"
                @error="handleError"
            >
                <span>可以自定义上传控件，点我上传</span>
            </HUploadFile>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="本地Blob地址">
            {{ result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem, ElMessage } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HUploadFile from '../index.vue'

const result = ref('')
const httpRequest = (file: File, done: () => void, localUrl: string) => {
    setTimeout(() => {
        result.value = localUrl
        done()
    }, 1000)
}
const handleError = (message: string) => {
    ElMessage({ message, type: 'error' })
}
</script>
