<template>
    <el-space direction="vertical" size="large" alignment="left">
        <HUploadFile
            cropper
            :http-request="httpRequest"
            :image-options="{
                width: '400px',
                height: '200px',
                iconSize: 30,
                icon: 'Picture',
            }"
        />
        <el-text>本地Blob地址：<el-link type="primary" :href="result" target="_blank">{{ result }}</el-link></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref()

function httpRequest(_: File, done: () => void, localUrl: string) {
    result.value = localUrl
    setTimeout(() => {
        done()
    }, 1000)
}
</script>
