<template>
    <Wrapper>
        <HUploadFile :http-request="httpRequest" @error="handleError" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import Wrapper from '@/components/simple-wrapper.vue'
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
