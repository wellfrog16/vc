<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <vc-input v-model="result" :block="true">
            <template #prepend>输入点什么</template>
        </vc-input>
        <el-text>你输入了：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref('')
</script>
