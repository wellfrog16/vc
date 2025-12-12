<template>
    <el-space direction="vertical" size="large" alignment="left">
        <vc-choice v-model="result" :options="options" />
        <el-text>你选择了：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const options = ['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌']
const result = ref('')
</script>
