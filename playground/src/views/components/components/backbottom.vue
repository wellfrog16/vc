<template>
    <div :class="$style.container">
        <el-text>设置 parent，它会自动向上找到 el-scrollbar 的容器</el-text>
        <HBackbottom parent />
        <div :class="$style.section" class="section">
            <div :class="$style.content">1</div>
        </div>
        <HBackbottom target=".section" />
    </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.container {
    height: 2500px;
    position: relative;
}

.section {
    height: 400px;
    width: 600px;
    background-color: #eee;
    position: relative;
    overflow-y: auto;
}

.content {
    height: 1000px;
}
</style>
