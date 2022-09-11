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
import { ref } from 'vue'
import { ElButton, ElMessage } from 'element-plus'
import Wrapper from '@/components/simple-wrapper.vue'
import HDialogUploadImages from '../index.vue'
import type { IUploadFile } from '../props'

const result = ref<(File | IUploadFile)[]>([])
const visible = ref(false)

const handleClick = () => {
    visible.value = true
}

const httpRequest = async (file: File) => {
    const myFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: window.URL.createObjectURL(file),
    }
    return myFile
}

const handleError = (message: string) => {
    ElMessage.error({ message })
}
</script>
