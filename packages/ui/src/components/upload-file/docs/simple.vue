<template>
    <Wrapper>
        <HUploadFile :http-request="httpRequest" @error="handleError" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import HUploadFile from '../upload-file.vue'

const result = ref('')
function httpRequest(_file: File, done: () => void, localUrl: string) {
    setTimeout(() => {
        result.value = localUrl
        done()
    }, 1000)
}
function handleError(message: string) {
    ElMessage({ message, type: 'error' })
}
</script>
