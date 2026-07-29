<template>
    <el-space size="large" direction="vertical" alignment="left">
        <vc-gen-input v-model="result" />
        <vc-gen-input v-model="result" disabled />
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref('')
</script>

<style lang="scss" module></style>
