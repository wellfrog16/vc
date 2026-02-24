<template>
    <ElTable
        ref="tableRef"
        :data="myData"
        row-key="prop"
        border
        :size="size"
        :height="height"
        scrollbar-always-on
        :class="$style.table"
    >
        <ElTableColumn prop="label" label="列名" show-overflow-tooltip>
            <template #default="{ row }">
                <div :class="$style.label">
                    <ElCheckbox v-model="row.visible" :label="row.label" :size="size" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="宽度" width="210" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcChoice v-model="row.widthType" :options="widthOptions" :size="size" @change="handleWidthChange(row)" />
                    <VcInputNumber v-if="row.widthType === 'width'" v-model="row.width" :min="0" :size="size" :controls="false" input-width="50px" />
                    <VcInputNumber v-else v-model="row.minWidth" :min="0" :size="size" :controls="false" input-width="50px" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="数据位置" width="140" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcChoice v-model="row.align" :options="alignOptions" :size="size" />
                </div>
            </template>
        </ElTableColumn>
        <ElTableColumn v-if="isFullMode" label="冻结位置" width="100" align="center">
            <template #default="{ row }">
                <div :class="$style['item-container']">
                    <VcChoice v-model="row.formFixed" multiple :options="fixedOptions" :size="size" @change="handleFixedChange(row)" />
                </div>
            </template>
        </ElTableColumn>
    </ElTable>
</template>

<script setup lang="ts">
import type { IColumnConfig, IExplorerColumnTableEmits, IExplorerColumnTableProps } from './explorer-column-table'
import Sortable from 'sortablejs'
import VcChoice from '@/components/choice/choice.vue'
import VcInputNumber from '@/components/input-number/input-number.vue'

const props = withDefaults(defineProps<IExplorerColumnTableProps>(), {
    highlightCurrent: false,
    height: 320,
})
const emits = defineEmits<IExplorerColumnTableEmits>()

const tableRef = useTemplateRef('tableRef')
const $style = useCssModule()
const sortable = shallowRef<Sortable | null>(null)

const myData = computed({
    get() {
        if (!props.data) { return [] }
        return props.data.map(item => {
            if (item.fixed) {
                item.formFixed = [item.fixed]
            }
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

const isFullMode = computed(() => props.mode === 'full')

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
        sortable.value.destroy()
    }

    sortable.value = new Sortable(el, {
        animation: 150,
        handle: `.${$style.label}`, // 可选：指定拖拽手柄
        onEnd: evt => {
            const { newIndex, oldIndex } = evt

            // 本地数据重排
            if (newIndex !== undefined && oldIndex !== undefined) {
                const item = myData.value.splice(oldIndex, 1)[0]
                myData.value.splice(newIndex, 0, item)
            }
            myData.value = [...myData.value] // 触发更新
        },
    })
}

defineExpose({ init })
</script>

<style lang="scss" module>
.table {
    --el-table-header-bg-color: var(--el-color-info-light-9);
    --el-table-row-hover-bg-color: var(--el-color-primary-light-9);
}

.label {
    display: inline-flex;
    width: 100%;

    :global {
        .el-checkbox {
            width: 100%;
            display: flex;
            align-items: center;
            cursor: move;

            > span {
                display: inline-flex;
                align-items: center;
                height: 100%;
            }
        }
        .el-checkbox__label {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
        }
    }
}

.item-container {
    display: inline-flex;
    align-items: center;
    column-gap: 4px;
    padding: 1px 0;
    line-height: 0;
    vertical-align: middle;

    > div {
        vertical-align: middle;
    }
}
</style>
