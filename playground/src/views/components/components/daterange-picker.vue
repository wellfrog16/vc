<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <div><vc-daterange-picker v-model="result" :limit-days="7" :include-today="false" /></div>
        <el-text>你输入了：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref<string[]>([])
</script>
