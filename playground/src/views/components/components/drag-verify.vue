<template>
    <el-space size="large" direction="vertical" alignment="left">
        <vc-drag-verify v-model:success="result" type="text" />
        <vc-drag-verify v-model:success="result" type="image" :imgs="verifyImgs" />
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref(false)
const verifyImgs = [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
]
</script>

<style lang="scss" module></style>
