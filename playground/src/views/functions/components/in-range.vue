<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div><el-input-number v-model="num" :min="1" :max="10" /></div>
        <el-text>是否在范围 [3, 7] 内：{{ inRange(num, [3, 7]) }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
import { inRange } from '@wfrog/vc-utils'

const num = ref(5)
</script>
