<template>
    <ElTable
        v-if="tableVisible"
        ref="tableRef"
        :data="myData"
        row-key="id"
        border
        :size="size"
        :height="height"
        scrollbar-always-on
        :class="$style.table"
    >
        <ElTableColumn v-if="!editable" prop="label" label="列名" :min-width="200" show-overflow-tooltip>
            <template #default="{ row }">
                <div :class="[$style.label, $style.handle]">
                    <ElCheckbox v-model="row.visible" :label="getLabel(row)" :size="size" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode && editable" prop="label" label="列名" :min-width="200">
            <template #default="{ row }">
                <div :class="$style.label">
                    <ElCheckbox v-model="row.visible" :size="size">
                        <VcInput v-model="row.label" block :size="size" :disabled="row.disabled" />
                    </ElCheckbox>
                    <VcIconifyIcon :class="$style.handle" name="carbon:draggable" size="30px" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode && editable" prop="prop" label="Prop" :min-width="200">
            <template #default="{ row }">
                <VcInput v-model="row.prop" block :size="size" :disabled="row.disabled" />
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="宽度" :width="widthConfig.width" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcChoice v-model="row.widthType" :options="widthOptions" :size="size" :disabled="row.disabled" @change="handleWidthChange(row)" />
                    <VcInputNumber v-if="row.widthType === 'width'" v-model="row.width" :min="0" :size="size" :controls="false" width="80px" :disabled="row.disabled" />
                    <VcInputNumber v-else v-model="row.minWidth" :min="0" :size="size" :controls="false" width="80px" :disabled="row.disabled" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="数据位置" :width="widthConfig.data" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcChoice v-model="row.align" :options="alignOptions" :size="size" :disabled="row.disabled" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="冻结位置" :width="widthConfig.fixed" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcChoice v-model="row.formFixed" multiple :options="fixedOptions" :size="size" :disabled="row.disabled" @change="handleFixedChange(row)" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="处理方式" :width="widthConfig.formatter" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcSelect v-model="row.formatterName" :append-to="tableRef?.$el" :options="formatterNameOptions" :size="size" :disabled="row.disabled" width="84px" />
                </div>
            </template>
        </ElTableColumn>
        <slot />
        <ElTableColumn v-if="emptyColumn" label="" />
        <template v-if="$slots.append" #append>
            <slot name="append" />
        </template>
    </ElTable>
</template>

<script setup lang="ts">
import type { UseDraggableReturn } from 'vue-draggable-plus'
import type { IColumnConfig, IExplorerColumnTableEmits, IExplorerColumnTableProps } from './explorer-column-table'
import { useDraggable } from 'vue-draggable-plus'
import VcChoice from '../choice/choice.vue'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcInputNumber from '../input-number/input-number.vue'
import VcInput from '../input/input.vue'
import VcSelect from '../select/select.vue'

const props = withDefaults(defineProps<IExplorerColumnTableProps>(), {
    highlightCurrent: false,
    height: 320,
    emptyColumn: false,
    mode: 'easy',
    size: 'default',
    editable: false,
})
const emits = defineEmits<IExplorerColumnTableEmits>()

const tableRef = useTemplateRef('tableRef')
const $style = useCssModule()
const sortable = shallowRef<UseDraggableReturn>()

const myData = computed({
    get() {
        if (!props.data) { return [] }
        return props.data.map(item => {
            if (item.fixed) {
                item.formFixed = [item.fixed]
            }
            item.formatterName ??= 'text'
            return item
        })
    },
    set(val) {
        emits('update:data', val)
    },
})

const widthOptions = [
    { label: '宽', value: 'width' },
    { label: '最小宽', value: 'minWidth' },
]

const alignOptions = [
    { label: '左', value: 'left' },
    { label: '中', value: 'center' },
    { label: '右', value: 'right' },
]

const fixedOptions = [
    { label: '左', value: 'left' },
    { label: '右', value: 'right' },
]

const formatterNameOptions = computed(() => {
    return [
        { label: '文本', value: 'text' },
        { label: '文本截断', value: 'truncate' },
        ...props.formatterNameOptions || [],
    ]
})

const widthConfig = ref({ width: 240, data: 160, fixed: 120, formatter: 120 })
const widthConfigWatch = watch(() => props.size, () => {
    if (props.size === 'small') {
        widthConfig.value = { width: 210, data: 140, fixed: 100, formatter: 110 }
        return
    }
    if (props.size === 'default') {
        widthConfig.value = { width: 240, data: 160, fixed: 120, formatter: 120 }
        return
    }
    widthConfig.value = { width: 260, data: 200, fixed: 140, formatter: 140 }
}, { immediate: true })

//  todo 验证
// const widthConfig = computed(() => {
//     if (props.size === 'small') {
//         return { width: 210, data: 140, fixed: 100, dataType: 110 }
//     }
//     if (props.size === 'default') {
//         return { width: 240, data: 160, fixed: 120, dataType: 120 }
//     }
//     return { width: 260, data: 200, fixed: 140, dataType: 140 }
// })

const isFullMode = computed(() => props.mode === 'full')

function getLabel(row: IColumnConfig) {
    if (row.label) { return row.label }
    if (row.prop === 'index') { return '序号' }
    if (row.prop.startsWith('expand')) { return '展开行' }
    return '-'
}

function handleWidthChange(row: IColumnConfig) {
    if (row.widthType === 'width') {
        row.width = row.minWidth
        delete row.minWidth
    }
    else {
        row.minWidth = row.width
        delete row.width
    }
}

function handleFixedChange(row: IColumnConfig) {
    if (Array.isArray(row.formFixed)) {
        if (row.formFixed.length === 0) {
            delete row.fixed
        }
        if (row.formFixed.length === 1) {
            row.fixed = row.formFixed[0]
        }
        if (row.formFixed.length === 2) {
            row.fixed = row.formFixed[1]
            row.formFixed = [row.formFixed[1]]
        }
    }
}

function init() {
    const el = tableRef.value?.$el.querySelector('.el-table__body tbody')
    if (!el) { return }

    if (sortable.value) {
        return
    }

    sortable.value = useDraggable(el, myData, {
        animation: 150,
        handle: `.${$style.handle}`, // 可选：指定拖拽手柄
    })
}

const tableVisible = ref(true)
async function rerender() {
    sortable.value?.destroy()
    tableVisible.value = false
    await nextTick()
    tableVisible.value = true
}

defineExpose({
    init,
    tableRef,
    rerender,
    setWidthConfig: (params: typeof widthConfig.value) => {
        widthConfig.value = params
    },
    getWidthConfig: () => {
        return widthConfig.value
    },
})

onBeforeUnmount(() => widthConfigWatch.stop())
</script>

<style lang="scss" module>
div.table {
    flex-grow: 1;
    height: 100px;

    --el-table-header-bg-color: var(--el-color-info-light-9);
    --el-table-row-hover-bg-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));
}

.label {
    display: inline-flex;
    align-items: center;
    width: 100%;

    :global {
        .el-checkbox {
            display: flex;
            align-items: center;
            width: 100%;
        }
        .el-checkbox__label {
            flex-grow: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .iconify {
            margin-left: 4px;
        }
    }
}

.handle {
    cursor: move;
}

.item-container {
    display: inline-flex;
    column-gap: 4px;
    align-items: center;
    vertical-align: middle;
    padding: 1px 0;
    line-height: 0;

    > div {
        vertical-align: middle;
    }
}
</style>
