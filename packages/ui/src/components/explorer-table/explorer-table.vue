<template>
    <div :class="$style['explorer-table']">
        <ElTable :data="data" stripe :class="$style.table" v-bind="$attrs" scrollbar-always-on :highlight-current-row="highlightCurrent">
            <slot />
        </ElTable>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerTableProps } from './explorer-table'

withDefaults(defineProps<IExplorerTableProps>(), {
    highlightCurrent: false,
})
</script>

<style lang="scss" module>
.explorer-table {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.table {
    // width: 100%;
    flex-grow: 1;
    height: 100px;

    --el-table-header-bg-color: var(--el-color-info-light-9);
    --el-table-row-hover-bg-color: var(--el-color-primary-light-9);
}
</style>
