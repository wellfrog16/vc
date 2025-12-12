<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <div>
            <HThousandInput v-model="result1" v-model:format-value="result2">
                <template #prepend>输入点数字</template>
            </HThousandInput>
        </div>
        <el-text>你输入了：<el-text type="primary">{{ result1 }}</el-text></el-text>
        <el-text>你输入了：<el-text type="primary">{{ result2 }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result1 = ref('')
const result2 = ref('')
</script>
