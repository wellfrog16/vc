<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <div><HSwitch v-model="result" active-text="开" inactive-text="关" active-value="Open" inactive-value="Close" confirm /></div>
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const result = ref('')
</script>
