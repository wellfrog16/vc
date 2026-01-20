<template>
    <el-space size="large" direction="vertical" alignment="left">
        <vc-icon-picker v-model="result" />
        <el-text>
            结果：
            <el-text type="primary"><vc-iconify-icon :name="result" />{{ result }}</el-text>
        </el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref('')
</script>
