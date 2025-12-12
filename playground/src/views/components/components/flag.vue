<template>
    <el-space :class="$style.container">
        <vc-flag code="RUS" size="2em" />
        <vc-flag code="SPM" size="30px" />
        <vc-flag code="SGP" :size="40" />
        <vc-flag code="BA" />
        <vc-flag code="TG" />
        <vc-flag code="EU" />
    </el-space>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.container {
    padding: 12px;
    background-color: var(--el-color-info-light-7);
}
</style>
