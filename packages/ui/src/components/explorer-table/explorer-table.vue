<template>
    <div v-loading="loading" :class="$style['explorer-table']">
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
                <!-- <ElTableColumn v-if="haveIndex" type="index" :width="size === 'large' ? 80 : 60" align="center" fixed="left" /> -->
                <ElTableColumn v-for="item in columns" :key="item.prop" v-bind="item" :type="columnType(item)">
                    <template v-if="item.prop.startsWith('expand')" #default="{ row, $index }">
                        <slot name="expand" :row="row" :index="$index" />
                    </template>
                    <template v-else-if="item.prop === 'index'" #default="{ $index }">
                        {{ startIndex + $index + 1 }}
                    </template>
                    <template v-else-if="item.prop === 'operation'" #default="{ row, $index }">
                        <slot name="operation" :row="row" :index="$index" />
                    </template>
                    <template v-else #default="{ row, $index }">
                        <component :is="columnRender(item, row, emits, $index)" />
                    </template>
                </ElTableColumn>
            </template>
            <slot />
            <template #empty>
                <div v-if="!loading && !pending">{{ emptyText }}</div>
                <div v-else />
            </template>
        </ElTable>
    </div>
</template>

<script setup lang="ts">
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'
import type { IExplorerTableEmits, IExplorerTableProps } from './explorer-table'
import { ElTableColumn } from 'element-plus'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'

const props = withDefaults(defineProps<IExplorerTableProps>(), {
    emptyText: '没有数据',
    loadingText: '数据加载中...',
    highlightCurrent: false,
    columnRender: (column: IColumnConfig, row: Record<string, any>) => h('span', row[column.prop]),
    loading: false,
    startIndex: 0,
})
const emits = defineEmits<IExplorerTableEmits>()

const state = injectExplorerPanelState()
const columns = computed(() => state.columnConfig.value.filter(item => item.visible !== false))

function columnType(item: IColumnConfig) {
    if (item.prop.startsWith('expand')) { return 'expand' }
    return 'default'
}

watch(() => props.columnConfig, val => {
    if (Array.isArray(state.columnConfig.value) && state.columnConfig.value.length) { return }
    state.columnConfig.value = val || []
}, { deep: true, immediate: true })

function onHeaderDragend(newWidth: number, _oldWidth: number, column: any) {
    const item = state.columnConfig.value.find(item => item.prop === column.property)
    if (item) {
        item.width = newWidth
        item.widthType = 'width'
        delete item.minWidth
        state.actions.saveColumnConfig()
    }
}

defineExpose({
    setColumns: (columns: IColumnConfig[]) => {
        state.columnConfig.value = columns
        state.actions.saveColumnConfig()
    },
})
</script>

<style lang="scss" module>
.explorer-table {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

div.table {
    flex-grow: 1;
    height: 100px;

    --el-table-header-bg-color: var(--el-color-info-light-9);
    --el-table-row-hover-bg-color: var(--el-color-primary-light-9);

    :global {
        .el-table__header-wrapper .el-table__cell:hover {
            border-right-color: var(--el-color-primary-light-5) !important;
        }

        .el-table__column-resize-proxy {
            border-color: var(--el-color-primary);
        }
    }
}
</style>
