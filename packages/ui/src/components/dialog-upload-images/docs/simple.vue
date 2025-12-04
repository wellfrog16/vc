<template>
    <Wrapper>
        <ElButton @click="handleClick">打开</ElButton>
        <HDialogUploadImages
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
import { defaultWindow } from '@wfrog/utils'
import { ElButton, ElMessage } from 'element-plus'
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HDialogUploadImages from '../dialog-upload-images.vue'

const result = ref<(File | IUploadFile)[]>([])
const visible = ref(false)

function handleClick() {
    visible.value = true
}

async function httpRequest(file: File) {
    if (!defaultWindow) { return }
    const myFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: defaultWindow.URL.createObjectURL(file),
    }
    return myFile
}

function handleError(message: string) {
    ElMessage.error({ message })
}
</script>
