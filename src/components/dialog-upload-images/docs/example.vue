<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElButton @click="handleClick">打开</ElButton>
            <HDialogUploadImages
                v-model="result"
                v-model:visible="visible"
                :http-request="httpRequest"
                :limit="200"
                @error="handleError"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElMessage } from 'element-plus'
import { defaultWindow } from '@wfrog/utils'
import Wrapper from '@/components/example-wrapper.vue'
import HDialogUploadImages from '../index.vue'

const demoData: any = {
    name: '山.png',
    size: 9988,
    type: 'image/jpeg',
    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    uid: 1625899269286,
}

const result = ref<File[]>([demoData])
const visible = ref(false)

const handleClick = () => {
    visible.value = true
}

const httpRequest = async (file: File) => {
    if (!defaultWindow) { return }

    const myFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: defaultWindow.URL.createObjectURL(file),
    }
    return myFile
}

const handleError = (message: string) => {
    ElMessage.error({ message })
}
</script>
