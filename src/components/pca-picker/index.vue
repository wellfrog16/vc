<template>
    <ElPopover
        ref="myPopover"
        :visible="popoverVisible"
        placement="bottom"
        :popper-class="$style.popover"
    >
        <div ref="wrapperRef" :class="$style.wrapper">
            <FilterPicker v-if="keyword" />
            <PPicker v-if="!keyword && type === 'P'" />
            <CPicker v-if="!keyword && type === 'C'" />
        </div>
        <template #reference>
            <HSelect
                ref="mySelect"
                v-model="myValue"
                :placeholder="placeholder"
                collapse-tags
                collapse-tags-tooltip
                clearable
                :disabled="loading || disabled"
                :loading="loading"
                :multiple="multiple"
                :options="optionData"
                :class="[selectClassName, $style.select]"
                :popper-class="$style['popover-select']"
                :filter-method="query => keyword = query"
                v-bind="$attrs"
                @click.capture="handleSelectClick"
                @clear="clear"
            />
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, onBeforeUnmount, onMounted, ref, shallowRef, useCssModule, watch } from 'vue'
import { storage } from '@wfrog/utils'
import { flatMap, flatMapDeep, flattenDeep, get, pick } from 'lodash-es'
import { onClickOutside, useThrottleFn, useToggle, useVModel } from '@vueuse/core'
import { ElCascaderPanel, ElPopover, ElScrollbar, ElTree } from 'element-plus'

import { useProvide } from '@/use/useStore'
import { injectConfig } from '@/components/config-provider/config'
import HSelect from '@/components/select/index.vue'

import FilterPicker from './components/filter.vue'
import PPicker from './components/p.vue'
import CPicker from './components/c.vue'
import './index.scss'

import { KEY_NAME, usePCAFetchData } from './source'
import type { IPCAData, IPropType } from './source'

const props = withDefaults(defineProps<IPropType>(), {
    disabled: false,
    excludeIds: () => [71, 81, 82], // 港澳台
    nameKey: 'fn',
    activeMark: true,
    syncActive: false,
    historyMax: 6,
    hotText: '热门',
    historyText: '历史选择',
})
const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'change', value1?: IPCAData, value2?: IPCAData | IPCAData[]): void
    (e: 'limit', number: number, value: IPCAData): void
}>()

const myValue = useVModel(props, 'modelValue', emits)
const { pcaBaseUrl, crosProxy } = injectConfig()
const [popoverVisible, togglePopoverVisible] = useToggle()
const $style = useCssModule()
const pcaFetchData = usePCAFetchData(props)
const { loading, fetchData, setProps, keyword, optionData, appendToHistory, getValueData } = pcaFetchData

// popover显示隐藏控制
// const mySelect = ref<InstanceType<typeof ElSelect>>()
// const mySelect = ref<any>() // 解决无法生成类型

const wrapperRef = shallowRef<any>()
onClickOutside(wrapperRef, event => {
    let target = event.target as any
    let result = false

    do {
        result = target.classList ? target.classList.contains($style.select) : false
        target = target.parentNode
    } while (result === false && target !== null && target.nodeName !== 'BODY')

    !result && togglePopoverVisible(false)
})

// 修复箭头样式
const selectClassName = computed(() => ({ [$style['is-active']]: popoverVisible.value }))
const myPlaceholder = computed(() => loading.value ? props.loadingText : props.placeholder)

const handleSelectClick = useThrottleFn(() => !loading.value && !props.disabled && togglePopoverVisible(), 300)

const handleChange = (item: IPCAData) => {
    if (props.multiple) {
        emits('change', item, getValueData(myValue.value))
    }
    else {
        emits('change', item, item)
        togglePopoverVisible(false)
    }
    setTimeout(() => (keyword.value = ''), 300)
}

const clear = () => {
    togglePopoverVisible(false)
    emits('change', undefined, undefined)
}

const handleLimit = (item: IPCAData) => {
    emits('limit', props.limit!, item)
}

useProvide(KEY_NAME, {
    props,
    ...pcaFetchData,
    popoverVisible,
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
                if (props.limit && val.length >= props.limit) {
                    emits('limit', props.limit, item)
                    return
                }
                appendToHistory(item.id)
                val.push(item.id)
            }
            myValue.value = val
        }
        else {
            appendToHistory(item.id)
            myValue.value = item.id
        }
        handleChange(item)
    },
})

const propsWatch = watch(() => props, newProps => { setProps(newProps) }, { deep: true })

onMounted(async () => {
    setProps(props)
    await fetchData(pcaBaseUrl || '', crosProxy)
})

onBeforeUnmount(() => {
    propsWatch.stop()
})
</script>

<style lang="scss" module>
.popover {
    width: auto !important;
    min-width: 80px !important;
}

.wrapper {
    display: flex;
}

.select {
    :global(.el-tag .el-icon) {
        display: none;
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
