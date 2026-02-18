<template>
    <ElPopover placement="bottom-end" trigger="click" :width="popoverWidth" :teleported="false" @hide="onHide" :show-arrow="false" @before-enter="handleBefore">
        <template v-if="isInit" #default>
            <div :class="$style.header">
                <ElText size="large">列设置</ElText>
                <div :class="$style['mode-wrapper']">
                    <VcButton v-if="isFullMode" :class="$style.reset" :icon="{ name: 'RefreshLeft' }">重置</VcButton>
                    <ElSegmented v-model="mode" :options="modeOptions" />
                </div>
            </div>
            <ElDivider :class="$style.divider" />
            <ElTable
                ref="tableRef"
                :data="myData"
                row-key="prop"
                border
                :size="size"
                height="320px"
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
        <template #reference>
            <slot />
        </template>
    </ElPopover>
</template>

<script setup lang="ts">
import type { IColumnConfig } from '../../explorer-table/explorer-table'
import type { IColumnSetterEmits, IColumnSetterProps } from '../explorer-tools'
import { storage } from '@wfrog/vc-utils'
import Sortable from 'sortablejs'
import VcButton from '@/components/button'
import VcChoice from '../../choice/choice.vue'
import { injectExplorerState } from '../../explorer/explorer'
import VcInputNumber from '../../input-number/input-number.vue'

const props = withDefaults(defineProps<IColumnSetterProps>(), {
    data: () => [],
})

const emits = defineEmits<IColumnSetterEmits>()

const { key } = injectExplorerState()
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
const tableRef = useTemplateRef('tableRef')
const $style = useCssModule()

const columnStorageKey = props.toolsKey ? `${key}-${props.toolsKey}-column-config` : `${key}-column-config`

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

const modeOptions = [
    { label: '简单设置', value: 'easy' },
    { label: '完整设置', value: 'full' },
]

const mode = ref('easy')
const isFullMode = computed(() => mode.value === 'full')
const popoverWidth = computed(() => isFullMode.value ? '750px' : '270px')
const isInit = ref(false)

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

function onHide() {
    emits('configConfirm', myData.value)
    if (!props.columnToStorage) { return }
    storage.set(columnStorageKey, myData.value)
}

function loadConfig() {
    if (props.columnToStorage) {
        const columnConfig = storage.get(columnStorageKey)
        if (Array.isArray(columnConfig) && columnConfig.length) {
            myData.value = columnConfig
        }
    }
    else {
        storage.remove(columnStorageKey)
    }
}

function handleBefore() {
    isInit.value = true
    loadConfig()
}

const initWatch = watch(isInit, async val => {
    if (!val) { return }

    await nextTick()
    const el = tableRef.value?.$el.querySelector('.el-table__body tbody')
    if (!el) { return }

    // eslint-disable-next-line no-new
    new Sortable(el, {
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
    initWatch.stop()
})

onBeforeMount(() => loadConfig())
</script>

<style lang="scss" module>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mode-wrapper {
    display: flex;
    align-items: center;
    column-gap: 8px;
}

.reset {
    height: 28px;
}

.divider {
    margin: 8px 0;
}

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
