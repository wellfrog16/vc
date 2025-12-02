<template>
    <el-space :class="$style.container">
        <HFlag code="RUS" size="2em" />
        <HFlag code="SPM" size="30px" />
        <HFlag code="SGP" :size="40" />
        <HFlag code="BA" />
        <HFlag code="TG" />
        <HFlag code="EU" />
    </el-space>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.container {
    padding: 12px;
    background-color: var(--el-color-info-light-7);
}
</style>
