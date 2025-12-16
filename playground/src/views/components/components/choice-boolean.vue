<template>
    <el-space direction="vertical" size="large" alignment="left">
        <vc-choice-boolean v-model="result" />
        <el-text>你选择了：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref(false)
</script>
