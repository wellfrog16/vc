<template>
    <el-space direction="vertical" size="large" alignment="left">
        <HSelect v-model="result" :options="options" />
        <el-text>你选择了：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const options = [
    { label: '小龙虾', value: 1 },
    { label: '毛血旺', value: 2 },
    { label: '剁椒鱼头', value: 3 },
    { label: '冰激凌', value: 4 },
    { label: '金汤肥牛', value: 5 },
]
const result = ref()
</script>
