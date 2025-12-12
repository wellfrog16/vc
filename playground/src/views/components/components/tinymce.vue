<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <HTinymce v-model="result" config="mini" />
        <div v-html="result" />
    </el-space>
</template>

<script setup lang="ts">
const result = ref('')
</script>
