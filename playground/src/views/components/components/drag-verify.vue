<template>
    <el-space size="large" direction="vertical" alignment="left">
        <vc-drag-verify v-model:success="result" type="text" />
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref(false)
</script>

<style lang="scss" module></style>
