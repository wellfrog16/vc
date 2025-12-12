<template>
    <el-space direction="vertical" size="large" alignment="left">
        <HInputNumber v-model="result" controls :precision="2" :step-strictly="false">
            <template #prefix>
                <span>￥</span>
            </template>
            <template #suffix>
                <span>RMB</span>
            </template>
        </HInputNumber>
        <el-text>{{ result }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref(0)
</script>
