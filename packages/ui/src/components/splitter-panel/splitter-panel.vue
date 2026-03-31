<template>
    <el-splitter-panel :class="$style.panel">
        <slot />
    </el-splitter-panel>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.panel {
    display: flex;
    flex-direction: column;
}
</style>
