<template>
    <el-space direction="vertical" size="large" alignment="left">
        <el-text>{{ defaultWindow?.document.title }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
import { defaultWindow } from '@wfrog/vc-utils'
</script>
