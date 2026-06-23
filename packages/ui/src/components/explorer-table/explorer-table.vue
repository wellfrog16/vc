<template>
    <div v-loading="loading" :class="$style['explorer-table']">
        <ElTable
            ref="tableRef"
            :data="data"
            stripe
            :class="$style.table"
            :size="size"
            v-bind="$attrs"
            scrollbar-always-on
            :highlight-current-row="highlightCurrent"
            border
            :allow-drag-last-column="true"
            :row-key="rowKey"
            :row-class-name="rowClassName"
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
            <template v-if="$slots.append" #append>
                <slot name="append" />
            </template>
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
import { ElCheckbox, ElRadio, ElTableColumn } from 'element-plus'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'

const props = withDefaults(defineProps<IExplorerTableProps>(), {
    emptyText: '没有数据',
    loadingText: '数据加载中...',
    highlightCurrent: false,
    columnRender: (column: IColumnConfig, row: Record<string, any>) => h('span', row[column.prop]),
    loading: false,
    startIndex: 0,
    rowKey: 'id',
    multipleCheckedKey: 'checked',
})
const emits = defineEmits<IExplorerTableEmits>()

const state = injectExplorerPanelState()
const $style = useCssModule()
const tableRef = useTemplateRef('tableRef')
const columns = computed(() => state.columnConfig.value.filter(item => item.visible !== false))
const selectedValue = ref<any>() // 单选
const selectedValues = ref<Set<any>>(new Set()) // 多选值
const isSingleSelection = computed(() => props.customSelection === 'radio')
const isMultipleSelection = computed(() => props.customSelection === 'checkbox')

// 全选按钮
const isSelectedAll = computed({
    get() {
        if (!isMultipleSelection.value) { return false }
        // 当前 data 所有数据的 checked 属性都为 true
        return props.data.every(row => row[props.multipleCheckedKey])
    },
    set(val) {
        if (!isMultipleSelection.value) { return }

        if (val) {
            const selected = new Set(props.data.map(getRowValue))
            // 合并两个 Set，全选还要包含之前选中的，所有不能单纯的赋值
            selectedValues.value = new Set([...selectedValues.value, ...selected])
        }
        else {
            selectedValues.value.clear()
        }
        props.data.forEach(row => { row.checked = val })
    },
})

const indeterminate = computed(() => {
    if (!isMultipleSelection.value) { return false }
    return selectedValues.value.size > 0 && selectedValues.value.size < props.data.length
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
        emits('singleSelectionChange', row)
    }
}

function handleCheckboxClick(row: any) {
    // 此时 data 里对应 row 的 checked 属性已经改变，这里参数的 row 应该是之前的副本(checked 还未改变)
    const value = getRowValue(row)
    const checked = !row[props.multipleCheckedKey] // 手动定义结果
    checked ? selectedValues.value.add(value) : selectedValues.value.delete(value)
    emits('multipleSelectionChange', row, Array.from(selectedValues.value)) // 事件出去时，row.checked 已经改变
}

function columnType(item: IColumnConfig) {
    if (item.prop.startsWith('expand')) { return 'expand' }
    return 'default'
}

function rowClassName({ row }: { row: any }) {
    const value = getRowValue(row)
    if (value === selectedValue.value || selectedValues.value.has(value)) {
        return $style['selected-row']
    }
    return ''
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
    setSelectedValues: (values: any[]) => {
        selectedValues.value = new Set(values)
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

.selection {
    :global(.cell) {
        display: flex;
        align-items: center;
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
    height: unset;
}

.selected-row {
    // background-color: var(--el-color-primary-light-9) !important;

    :global {
        td.el-table__cell {
            background-color: var(--el-color-primary-light-9) !important;
        }
    }
}
</style>
