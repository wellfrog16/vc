<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div>
            <ElButton @click="handleClick">打开</ElButton>
            <HDialogUploadImages
                v-model="result"
                v-model:visible="visible"
                :http-request="httpRequest"
                :limit="5"
                :lazy="false"
                @error="handleError"
            />
        </div>
        <el-text>{{ result }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const result = ref<File[]>([])
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
