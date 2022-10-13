<template>
    <Wrapper>
        <ElButton @click="handleClick">打开</ElButton>
        <HDialogCameraUpload
            v-model:visible="visible"
            :http-request="httpRequest"
        />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import Wrapper from '@/components/simple-wrapper.vue'
import HDialogCameraUpload from '../index.vue'

const result = ref('')
const visible = ref(false)

const handleClick = () => {
    visible.value = true
}

const httpRequest = (file: File, localUrl: string) => {
    result.value = localUrl
}
</script>
