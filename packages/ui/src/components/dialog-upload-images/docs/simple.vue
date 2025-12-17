<template>
    <Wrapper>
        <ElButton @click="handleClick">打开</ElButton>
        <VcDialogUploadImages
            v-model="result"
            v-model:visible="visible"
            :http-request="httpRequest"
            :limit="20"
            @error="handleError"
        />
    </Wrapper>
</template>

<script lang="ts" setup>
import type { IUploadFile } from '../dialog-upload-images'
import { ElMessage } from 'element-plus'
import VcDialogUploadImages from '../dialog-upload-images.vue'

const result = ref<(File | IUploadFile)[]>([])
const visible = ref(false)

function handleClick() {
    visible.value = true
}

async function httpRequest(file: File) {
    const myFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: window.URL.createObjectURL(file),
    }
    return myFile
}

function handleError(message: string) {
    ElMessage.error({ message })
}
</script>
