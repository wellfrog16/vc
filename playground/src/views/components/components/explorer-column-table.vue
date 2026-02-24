<template>
    <el-space size="large" direction="vertical" alignment="left">
        <vc-explorer-column-table />
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref('')
</script>

<style lang="scss" module></style>
