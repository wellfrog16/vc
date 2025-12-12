<template>
    <ElPopover
        ref="popoverRef"
        :visible="popoverVisible"
        placement="bottom"
        :popper-class="$style.popover"
    >
        <div ref="containerRef" :class="$style.container">
            <FilterPicker v-if="filterManualVisible || keyword" />
            <PPicker v-if="!filterManualVisible && !keyword && type === 'P'" />
            <CPicker v-if="!filterManualVisible && !keyword && type === 'C'" />
            <PCAPicker v-if="!filterManualVisible && !keyword && ['PCA', 'PC'].includes(type)" v-model="myValue" />
        </div>
        <template #reference>
            <div :class="$style.wrapper" @click.capture="handleSelectClick" @keyup="handleKeyup">
                <ElCascader
                    v-model="myValue"
                    :placeholder="myPlaceholder"
                    collapse-tags
                    collapse-tags-tooltip
                    clearable
                    :disabled="loading || disabled || loadFailed"
                    :loading="loading"
                    :options="optionData"
                    :props="cascaderProps"
                    :class="[selectClassName, $style.cascader]"
                    :popper-class="$style['popover-select']"
                    :before-filter="() => false"
                    v-bind="$attrs"
                    @clear="clear"
                />
            </div>
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import type { IPCAData, IPCAPickerProps } from './pca-picker'
import { useProvide } from '@/use/useStore'
import { injectConfig } from '../config-provider/config-provider'
import CPicker from './components/c.vue'
import FilterPicker from './components/filter.vue'
import PPicker from './components/p.vue'
import PCAPicker from './components/pca.vue'
import { KEY_NAME, usePCAData } from './pca-picker'
import './index.scss'

const props = withDefaults(defineProps<IPCAPickerProps>(), {
    disabled: false,
    excludeIds: () => [71, 81, 82], // 港澳台
    nameKey: 'n',
    activeMark: true,
    syncActive: false,
    historyMax: 6,
    hotText: '热门',
    historyText: '历史选择',
    loadingText: '加载数据源中...',
    loadFailedText: '数据源加载失败',
    placeholder: '请选择',
})
const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'change', data?: IPCAData | IPCAData[]): void
    (e: 'limit', number: number, value: IPCAData): void
}>()

const myValue = useVModel(props, 'modelValue', emits)
const { pcaBaseUrl, crosProxy } = injectConfig()
const [popoverVisible, togglePopoverVisible] = useToggle()
const $style = useCssModule()
const pcaFetchData = usePCAData(props)
const { loading, loadFailed, fetchData, setProps, keyword, lastKeyword, optionData, appendToHistory, getValueData } = pcaFetchData
const filterManualVisible = ref(false)

const isTreeType = computed(() => ['PCA', 'PC'].includes(props.type))
const myPlaceholder = computed(() => loadFailed.value ? props.loadFailedText : (loading.value ? props.loadingText : props.placeholder))

const popoverRef = useTemplateRef('popoverRef')
function updatePopper() {
    return nextTick(() => {
        popoverRef.value!.popperRef!.popperInstanceRef?.update()
    })
}

const cascaderProps = computed(() => ({
    value: 'id',
    label: props.nameKey,
    children: isTreeType.value ? 'childs' : 'undefined',
    multiple: props.multiple,
    emitPath: false,
}))

// 在 containerRef 外点击，如果不是点击了输入框($style.cascader)，则关闭 popover
const containerRef = useTemplateRef('containerRef')
onClickOutside(containerRef, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.cascader) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    if (!result) {
        // 说明 filter 层可见，关闭 popover 后再关闭 filter 层，以免闪烁。用 lastKeyword 为了防止数据闪烁
        if (keyword.value) {
            filterManualVisible.value = true
            lastKeyword.value = keyword.value
            setTimeout(() => {
                filterManualVisible.value = false
                lastKeyword.value = ''
            }, 500)
        }
        togglePopoverVisible(false)
    }
})

// 修复箭头样式
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value }))

const handleSelectClick = useThrottleFn(() => !loading.value && !props.disabled && togglePopoverVisible(), 300)

// 用于解决 before-filter 清空时无触发的问题
function handleKeyup(event: KeyboardEvent) {
    keyword.value = (event.target as HTMLInputElement).value
}

function handleChange(item: IPCAData | IPCAData[]) {
    const changeData = Array.isArray(item) ? item : item[0]
    emits('change', changeData)
    if (!props.multiple) {
        togglePopoverVisible(false)
    }
    setTimeout(() => (keyword.value = ''), 300)
}

function clear() {
    togglePopoverVisible(false)
    emits('change', undefined)
}

useProvide(KEY_NAME, {
    props,
    ...pcaFetchData,
    popoverVisible,
    togglePopoverVisible,
    itemClass: (item: IPCAData, isHistoryOrHot?: boolean) => {
        const isActive = myValue.value === item.id || (Array.isArray(myValue.value) && myValue.value.includes(item.id))
        return {
            'vc-pca-item': true,
            'active': isActive && (!isHistoryOrHot || props.syncActive),
            'active-mark': isActive && props.activeMark,
        }
    },
    clickItem: (item: IPCAData) => {
        if (props.multiple) {
            const val = Array.isArray(myValue.value) ? [...myValue.value] : []
            const index = val.indexOf(item.id)
            if (index > -1) {
                val.splice(index, 1)
            }
            else {
                if (props.limit && !isTreeType.value && val.length >= props.limit) {
                    emits('limit', props.limit, item)
                    return
                }
                appendToHistory(item.id)
                val.push(item.id)
            }
            myValue.value = val
            handleChange(getValueData(val))
        }
        else {
            appendToHistory(item.id)
            myValue.value = item.id
            handleChange(item)
        }
    },
    // 级联选择时的多选使用这个函数，myValue更新由于使用了v-model，所以不需要手动更新
    // 这里仅执行@change事件
    clickItems: (items: IPCAData[]) => {
        handleChange(items)
    },
    updatePopper,
})

const propsWatch = watch(() => props, newProps => { setProps(newProps) }, { deep: true })
const popoverWatch = watch(popoverVisible, () => (keyword.value = ''))

defineExpose({ getValueData })

onMounted(async () => {
    setProps(props)
    await fetchData(pcaBaseUrl || '', crosProxy)
})

onBeforeUnmount(() => {
    propsWatch.stop(); popoverWatch.stop()
})
</script>

<style lang="scss" module>
.popover {
    width: auto !important;
    min-width: 80px !important;
}

.container {
    display: flex;

    :global(.el-cascader-menu) {
        min-width: 80px;
    }
}

.wrapper {
    display: inline-block;
    width: unset;
    min-width: 300px;

    :global(.el-tag .el-icon) {
        display: none;
    }
}

.cascader {
    width: 100%;

    :global {
        .el-input__wrapper.is-focus {
            box-shadow: 0 0 0 1px var(--el-input-focus-border-color, var(--el-color-primary)) inset !important;
        }
    }
}

.is-active {
    :global {
        .el-input__inner {
            border-color: var(--color-primary);
        }

        .el-icon {
            transform: rotateZ(-180deg) !important;
        }
    }
}

.popover-select {
    display: none;
}
</style>
