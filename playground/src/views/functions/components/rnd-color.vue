<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div v-for="color in colors" :key="color" :style="{ color }">{{ color }}</div>
    </el-space>
</template>

<script setup lang="ts">
import { rndColor } from '@wfrog/vc-utils'

const colors: string[] = []
for (let i = 0; i < 10; i++) {
    const color = rndColor()
    colors.push(color)
}
</script>
