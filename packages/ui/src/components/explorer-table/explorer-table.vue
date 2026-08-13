<template>
    <ElTable
        ref="tableRef"
        :data="empty ? [] : data"
        stripe
        :class="$style.table"
        :size="size"
        scrollbar-always-on
        :highlight-current-row="highlightCurrent"
        border
        :allow-drag-last-column="true"
        :row-key="rowKey"
        :row-class-name="myRowClassName"
        @header-dragend="onHeaderDragend"
    >
        <ElTableColumn v-if="selection" type="selection" :width="size === 'large' ? 50 : 40" align="center" />
        <ElTableColumn v-if="customSelection" :width="size === 'large' ? 50 : 40" align="center" fixed="left" :class-name="$style.selection">
            <template v-if="isMultipleSelection" #header>
                <ElCheckbox v-model="isSelectedAll" :indeterminate="indeterminate" :class="$style.checkbox" />
            </template>
            <template #default="{ row }">
                <ElRadio v-if="isSingleSelection" v-model="selectedValue" :value="getRowValue(row)" :class="$style.radio" @click.stop="handleRadioClick(row)" />
                <ElCheckbox v-if="isMultipleSelection" v-model="row[multipleCheckedKey]" :class="$style.checkbox" @click.stop="handleCheckboxClick(row)" />
            </template>
        </ElTableColumn>
        <template v-if="columns.length">
            <!-- <ElTableColumn v-if="haveIndex" type="index" :width="size === 'large' ? 80 : 60" align="center" fixed="left" /> -->
            <ElTableColumn v-for="item in columns" :key="item.prop" v-bind="item" :type="columnType(item)">
                <template v-if="item.prop.startsWith('expand')" #default="{ row, $index }">
                    <slot :name="item.prop" :row="row" :index="$index" />
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
        <template v-if="$slots.append || scrollLoadEnabled || (loading && scrollLoad) || (scrollLoadDisabled && scrollLoad)" #append>
            <slot v-if="$slots.append" name="append" />
            <div v-if="scrollLoadEnabled" ref="sentinelRef" :class="$style.sentinel" />
            <slot v-if="loading && scrollLoad" name="loading">
                <div :class="$style['status-text']">
                    <ElIcon class="is-loading"><Loading /></ElIcon>
                    <ElText type="info">{{ loadingText }}</ElText>
                </div>
            </slot>
            <slot v-else-if="scrollLoadDisabled && scrollLoad" name="no-more">
                <div :class="$style['status-text']"><ElText type="info">{{ noMoreText }}</ElText></div>
            </slot>
        </template>
        <template #empty>
            <slot name="empty">
                <div v-if="empty"><ElText type="info">{{ emptyText }}</ElText></div>
                <div v-else />
            </slot>
        </template>
    </ElTable>
</template>

<script setup lang="ts">
import type { IColumnConfig } from '../explorer-column-table/explorer-column-table'
import type { IExplorerTableEmits, IExplorerTableProps } from './explorer-table'
import { Loading } from '@element-plus/icons-vue'
import { promiseTimeout } from '@vueuse/core'
import { ElCheckbox, ElRadio, ElTableColumn } from 'element-plus'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'

const props = withDefaults(defineProps<IExplorerTableProps>(), {
    emptyText: '没有数据',
    loadingText: '数据加载中',
    noMoreText: '没有更多了',
    highlightCurrent: false,
    columnRender: (column: IColumnConfig, row: Record<string, any>) => h('span', row[column.prop]),
    columnFilter: (column: IColumnConfig) => column.visible !== false,
    loading: false,
    startIndex: 0,
    rowKey: 'id',
    multipleCheckedKey: 'checked',
    empty: false,
    scrollLoad: false,
    scrollLoadDisabled: false,
    scrollLoadRootMargin: '100px',
    scrollLoadThreshold: 0,
})
const emits = defineEmits<IExplorerTableEmits>()

const state = injectExplorerPanelState()
const $style = useCssModule()
const tableRef = useTemplateRef('tableRef')
const sentinelRef = useTemplateRef('sentinelRef')
const columns = computed(() => state.columnConfig.value.filter(props.columnFilter))

const scrollLoadEnabled = computed(() =>
    props.scrollLoad && props.data.length > 0 && !props.loading && !props.scrollLoadDisabled,
)

const scrollRoot = computed(() => tableRef.value?.scrollBarRef?.wrapRef ?? null)

useIntersectionObserver(
    sentinelRef,
    ([{ isIntersecting }]) => {
        if (isIntersecting && scrollLoadEnabled.value) {
            emits('loadMore')
        }
    },
    {
        root: scrollRoot,
        rootMargin: props.scrollLoadRootMargin,
        threshold: props.scrollLoadThreshold,
    },
)
const selectedValue = ref<any>() // 单选
const selectedValues = computed(() => new Set(props.data.filter(item => item[props.multipleCheckedKey]).map(getRowValue))) // 多选
const isSingleSelection = computed(() => props.customSelection === 'radio')
const isMultipleSelection = computed(() => props.customSelection === 'checkbox')

// 全选按钮，只对当前 data 有效
const isSelectedAll = computed({
    get() {
        if (!isMultipleSelection.value) { return false }

        // 对比 selectedValues 和 data 里的每一个值，如果相等，则表示全选
        return selectedValues.value.size > 0 && Array.from(selectedValues.value).every(value => props.data.some(row => getRowValue(row) === value))
    },
    set(val) {
        if (!isMultipleSelection.value) { return }

        props.data.forEach(row => { row[props.multipleCheckedKey] = val })
        emits('selectAll', val, Array.from(selectedValues.value))
    },
})

const indeterminate = computed(() => {
    if (!isMultipleSelection.value || !props.data.length) { return false }
    return selectedValues.value.size > 0 && selectedValues.value.size < props.data.length && Array.from(selectedValues.value).some(value => props.data.some(row => getRowValue(row) !== value))
})

function getRowValue(row: Record<string, any>) {
    if (!row || !props.rowKey)
        return undefined

    // 1. 函数形式：直接调用
    if (typeof props.rowKey === 'function') {
        return props.rowKey(row)
    }

    // 2. 路径字符串：user.info.id
    if (typeof props.rowKey === 'string' && props.rowKey.includes('.')) {
        return props.rowKey.split('.').reduce((obj, key) => obj?.[key], row)
    }

    // 3. 普通属性名：id
    return row[props.rowKey]
}

function handleRadioClick(row: any) {
    const value = getRowValue(row)
    if (selectedValue.value !== value) {
        selectedValue.value = value
        emits('singleSelectionChange', row, selectedValue.value)
    }
}

async function handleCheckboxClick(row: any) {
    await promiseTimeout(0)
    emits('multipleSelectionChange', row, Array.from(selectedValues.value))
}

function columnType(item: IColumnConfig) {
    if (item.prop.startsWith('expand')) { return 'expand' }
    return 'default'
}

function myRowClassName(data: { row: Record<string, any>, rowIndex: number }) {
    const value = getRowValue(data.row)
    let clsName = ''
    if (typeof props.rowClassName === 'function') {
        clsName = props.rowClassName(data)
    }
    if (typeof props.rowClassName === 'string') {
        clsName = props.rowClassName
    }

    if (value === selectedValue.value || selectedValues.value.has(value)) {
        return `${clsName} ${$style['selected-row']}`
    }
    return clsName
}

watch(() => props.columnConfig, val => {
    if (Array.isArray(state.columnConfig.value) && state.columnConfig.value.length) { return }
    state.columnConfig.value = val || []
}, { deep: true, immediate: true })

function onHeaderDragend(newWidth: number, _oldWidth: number, column: any) {
    const item = state.columnConfig.value.find(item => item.prop === column.property)
    if (item && !item.disabled) {
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
    setSelectedValue: (value: any) => {
        selectedValue.value = value
    },
    selectAll: () => { isSelectedAll.value = true },
    clearSelection: () => { isSelectedAll.value = false },
    tableRef,
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
    --el-table-row-hover-bg-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));

    :global {
        .el-scrollbar__view {
            height: 100px;
            min-height: 100%;
        }

        .el-table__header-wrapper .el-table__cell:hover {
            border-right-color: var(--el-color-primary-light-5) !important;
        }

        .el-table__column-resize-proxy {
            border-color: var(--el-color-primary);
        }

        .el-table__empty-block {
            display: v-bind('`${empty ? "flex" : "none"}`');
        }
    }
}

.selection {
    :global(.cell) {
        align-items: center;
        display: flex;
    }
}

.radio {
    height: unset;

    :global {
        .el-radio__label {
            display: none;
        }
    }
}

.checkbox {
    height: unset !important;
}

.selected-row {
    :global {
        td.el-table__cell {
            background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light)) !important;
        }
    }
}

.status-text {
    align-items: center;
    column-gap: 4px;
    display: flex;
    justify-content: flex-start;
    padding: 12px;
}

.sentinel {
    height: 0;
}
</style>
