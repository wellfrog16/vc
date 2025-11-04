<template>
    <ElPopover
        ref="popoverRef"
        :visible="popoverVisible"
        placement="bottom"
        :popper-class="$style.popover"
    >
        <div ref="containerRef" :class="$style.container">
            <FilterPicker v-if="keyword" />
            <PPicker v-if="!keyword && type === 'P'" />
            <CPicker v-if="!keyword && type === 'C'" />
            <PCAPicker v-if="!keyword && ['PCA', 'PC'].includes(type)" v-model="myValue" />
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, useCssModule, useTemplateRef, watch } from 'vue'
import { onClickOutside, useThrottleFn, useToggle, useVModel } from '@vueuse/core'
import { ElCascader, ElPopover } from 'element-plus'

import { useProvide } from '@/use/useStore'
import { injectConfig } from '@/components/config-provider/config'

import FilterPicker from './components/filter.vue'
import PPicker from './components/p.vue'
import CPicker from './components/c.vue'
import PCAPicker from './components/pca.vue'
import './index.scss'

import { KEY_NAME, usePCAData } from './source'
import type { IPCAData } from './source'

// todo 没有使用source里的IPropType，是因为打包会报错
interface IPropType {
    source: 'p' | 'p-py' | 'p-py-fn' | 'pc' | 'pc-py' | 'pc-py-fn' | 'pca' | 'pca-py' | 'pca-py-fn'
    type: 'P' | 'C' | 'PC' | 'PCA'
    hotIds?: number[] // 热门城市的codes
    hotText?: string // 热门城市文案
    history?: boolean // 是否记录历史选择
    historyText?: string // 历史选择文案
    historyMax?: number // 历史记录的最大条数
    historyStorageKey?: string // 历史记录的Storage key
    excludeIds?: number[] // 排除的ids
    nameKey?: string
    modelValue: number | number[] | undefined
    disabled?: boolean
    multiple?: boolean
    placeholder?: string
    loadingText?: string
    loadFailedText?: string
    activeMark?: boolean // 选中项角标
    syncActive?: boolean // 是否在热门和历史选择里同步高亮选中项
    limit?: number // 多选时的数量限制
}

const props = withDefaults(defineProps<IPropType>(), {
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
const { loading, loadFailed, fetchData, setProps, keyword, optionData, appendToHistory, getValueData } = pcaFetchData

const isTreeType = computed(() => ['PCA', 'PC'].includes(props.type))
const myPlaceholder = computed(() => loadFailed.value ? props.loadFailedText : (loading.value ? props.loadingText : props.placeholder))

const popoverRef = useTemplateRef<any>('popoverRef')
const updatePopper = () => nextTick(() => {
    popoverRef.value!.popperRef!.popperInstanceRef?.update()
})

const cascaderProps = computed(() => ({
    value: 'id',
    label: props.nameKey,
    children: isTreeType.value ? 'childs' : 'undefined',
    multiple: props.multiple,
    emitPath: false,
}))

const containerRef = shallowRef<any>()
onClickOutside(containerRef, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.cascader) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    !result && togglePopoverVisible(false)
})

// 修复箭头样式
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value }))

const handleSelectClick = useThrottleFn(() => !loading.value && !props.disabled && togglePopoverVisible(), 300)

// 用于解决 before-filter 清空时无触发的问题
const handleKeyup = (event: KeyboardEvent) => {
    keyword.value = (event.target as HTMLInputElement).value
}

const handleChange = (item: IPCAData | IPCAData[]) => {
    emits('change', props.multiple ? item : item[0])
    if (!props.multiple) {
        togglePopoverVisible(false)
    }
    setTimeout(() => (keyword.value = ''), 300)
}

const clear = () => {
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
            'pca-item': true,
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

onBeforeUnmount(() => { propsWatch.stop(); popoverWatch.stop() })
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
