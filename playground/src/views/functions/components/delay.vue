<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div>{{ result }}</div>
    </el-space>
</template>

<script setup lang="ts">
import { delay } from '@wfrog/vc-utils'

const result = ref('3秒后变化')

onMounted(async () => {
    await delay(3000)
    result.value = '我变了'
})
</script>
