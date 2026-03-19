<template>
    <el-space size="large" direction="vertical" alignment="left">
        <div>
            <vc-transfer-panel v-model="result" title="角色" :data="options" />
        </div>
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const options = [
    { label: '管理员', value: 1 },
    { label: '编辑', value: 2 },
    { label: '普通用户', value: 3 },
    { label: '游客', value: 4 },
]

const result = ref([])
</script>
