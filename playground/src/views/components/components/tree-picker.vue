<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <div>
            <HTreePicker v-model="result" :options="treeData" multiple width="400px" filterable />
        </div>
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { treeData } from '../demo-data'

const result = ref('')
</script>
