<template>
    <Wrapper>
        <ElButton @click="handleClick">打开</ElButton>
        <VcDialogCameraUpload
            v-model:visible="visible"
            :http-request="httpRequest"
        />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDialogCameraUpload from '../dialog-camera-upload.vue'

const result = ref('')
const visible = ref(false)

function handleClick() {
    visible.value = true
}

function httpRequest(_file: File, localUrl: string) {
    result.value = localUrl
}
</script>
