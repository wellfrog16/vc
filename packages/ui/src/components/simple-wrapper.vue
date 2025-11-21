<template>
    <ElCard shadow="hover" :class="$style.main">
        <slot />
    </ElCard>
</template>

<script lang="ts" setup>
import { ElCard } from 'element-plus'
</script>

<style lang="scss" module>
.main {
    margin-top: 15px;
}
</style>
