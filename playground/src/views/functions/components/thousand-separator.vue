<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div>{{ thousandSeparator(1234567890, { decimalPlaces: 2 }) }}</div>
    </el-space>
</template>

<script setup lang="ts">
import { thousandSeparator } from '@wfrog/vc-utils'
</script>
