<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <HTinymce v-model="result" config="mini" />
        <div v-html="result" />
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const result = ref('')
</script>
