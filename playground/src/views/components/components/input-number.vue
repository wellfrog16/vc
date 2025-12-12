<template>
    <el-space direction="vertical" size="large" alignment="left">
        <vc-input-number v-model="result" controls :precision="2" :step-strictly="false">
            <template #prefix>
                <span>￥</span>
            </template>
            <template #suffix>
                <span>RMB</span>
            </template>
        </vc-input-number>
        <el-text>{{ result }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref(0)
</script>
