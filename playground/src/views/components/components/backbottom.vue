<template>
    <div :class="$style.container">
        <el-text>不设置 target 和 parent，它会自动向上找到 el-scrollbar 的容器</el-text>
        <HBackbottom />
    </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.container {
    height: 1500px;
    position: relative;
}
</style>
