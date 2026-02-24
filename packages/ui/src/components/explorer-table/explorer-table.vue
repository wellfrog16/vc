<template>
    <div :class="$style['explorer-table']">
        <ElTable
            :data="data"
            stripe
            :class="$style.table"
            :size="size"
            v-bind="$attrs"
            scrollbar-always-on
            :highlight-current-row="highlightCurrent"
            border
            :allow-drag-last-column="true"
            @header-dragend="onHeaderDragend"
        >
            <ElTableColumn v-if="selection" type="selection" :width="size === 'large' ? 50 : 38" align="center" />
            <template v-if="columns.length">
                <component :is="columnRender(item)" v-for="item in columns" :key="item.prop" />
            </template>
            <slot />
        </ElTable>
    </div>
</template>

<script setup lang="ts">
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'
import type { IExplorerTableProps } from './explorer-table'
import { ElTableColumn } from 'element-plus'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'

const props = withDefaults(defineProps<IExplorerTableProps>(), {
    highlightCurrent: false,
    columnRender: (column: IColumnConfig) => h(ElTableColumn, column),
})

const state = injectExplorerPanelState()
const columns = computed(() => state.columnConfig.value.filter(item => item.visible !== false))

watch(() => props.columnConfig, val => {
    if (Array.isArray(state.columnConfig.value) && state.columnConfig.value.length) { return }
    state.columnConfig.value = val || []
}, { deep: true, immediate: true })

function onHeaderDragend(newWidth: number, oldWidth: number, column: any, event: Event) {
    console.log(newWidth, oldWidth, column, event)
}
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

    :global {
        .el-table__header-wrapper .el-table__cell:hover {
            border-right-color: var(--el-color-primary-light-5);
        }

        .el-table__column-resize-proxy {
            border-color: var(--el-color-primary);
        }
    }
}
</style>
