<template>
    <el-space size="large" alignment="left" direction="vertical">
        <div>
            <el-button @click="handleClick">打开</el-button>
        </div>
        <el-image v-if="result" :src="result" :class="$style.image" />
    </el-space>
    <HDialogCameraUpload
        v-model:visible="visible"
        cropper
        @save="handleSave"
    />
</template>

<script setup lang="ts">
const result = ref('')
const visible = ref(false)

function handleClick() {
    visible.value = true
}

function handleSave(_file: File, localUrl: string) {
    result.value = localUrl
}
</script>

<style lang="scss" module>
.image {
    height: 200px;
}
</style>
