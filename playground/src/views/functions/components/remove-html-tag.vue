<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div>{{ htmlCode }}</div>
        <div>{{ removeHtmlTag(htmlCode) }}</div>
    </el-space>
</template>

<script setup lang="ts">
import { removeHtmlTag } from '@wfrog/vc-utils'

const htmlCode = '<p>This is a <strong>bold</strong> paragraph.</p>'
</script>
