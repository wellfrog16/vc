<template>
    <ElPopover
        ref="myPopover"
        :visible="popoverVisible"
        placement="bottom"
        :popper-class="$style.popover"
    >
        <div ref="wrapperRef" :class="$style.wrapper">
            <PPicker v-if="type === 'P'" v-model="myValue" v-bind="componentProps" @change="handleChange" @limit="handleLimit" />
            <CPicker v-if="type === 'C'" v-model="myValue" v-bind="componentProps" @change="handleChange" @limit="handleLimit" />
        </div>
        <template #reference>
            <HSelect
                ref="mySelect"
                v-model="myValue"
                :placeholder="placeholder"
                collapse-tags
                clearable
                :disabled="loading || disabled"
                :loading="loading"
                :multiple="multiple"
                :options="myOptions"
                :class="[selectClassName, $style.select]"
                :popper-class="$style['popover-select']"
                v-bind="$attrs"
                @click="handleSelectClick"
                @clear="clear"
            />
        </template>
    </ElPopover>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, onMounted, ref, shallowRef, useCssModule, watch } from 'vue'
import { storage } from '@wfrog/utils'
import { get, pick } from 'lodash-es'
import { onClickOutside, useThrottleFn, useToggle, useVModel } from '@vueuse/core'
import { ElCascaderPanel, ElPopover, ElScrollbar, ElTree } from 'element-plus'

import { injectConfig } from '@/components/config-provider/config'
import HSelect from '@/components/select/index.vue'

import PPicker from './components/p.vue'
import CPicker from './components/c.vue'
import './index.scss'

import type { CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel/src/node.d'
import type { IPCAData } from './source'

interface IPropType {
    source: 'p' | 'p-py' | 'p-py-fn' | 'pc' | 'pc-py' | 'pc-py-fn' | 'pca' | 'pca-py' | 'pca-py-fn'
    type: 'P' | 'C' | 'A'
    hotIds?: number[] // 热门城市的codes
    history?: boolean // 是否记录历史选择
    historyStorageKey?: string // 历史记录的Storage key
    excludeIds?: number[] // 排除的城市codes
    nameKey?: string
    modelValue: number | number[] | undefined
    disabled?: boolean
    multiple?: boolean
    placeholder?: string
    loadingText?: string
    activeMark?: boolean // 选中项角标
    syncActive?: boolean // 是否在热门和历史选择里同步高亮选中项
    limit?: number // 多选时的数量限制
}

const props = withDefaults(defineProps<IPropType>(), {
    disabled: false,
    excludeIds: () => [71, 81, 82], // 港澳台
    nameKey: 'fn',
    activeMark: true,
    syncActive: false,
})
const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'change', value1: IPCAData, value2: IPCAData | IPCAData[]): void
    (e: 'limit', number: number, value: IPCAData): void
}>()

const myValue = useVModel(props, 'modelValue', emits)
const { pcaBaseUrl, crosProxy } = injectConfig()
const [popoverVisible, togglePopoverVisible] = useToggle()
const $style = useCssModule()
const data = ref<IPCAData[]>()
const loading = ref(false)

const selectValue = ref<any>()

const componentProps = computed(() => {
    return {
        ...pick(props, ['source', 'hotIds', 'multiple', 'history', 'historyStorageKey', 'nameKey', 'activeMark', 'syncActive', 'limit']),
        data: data.value,
    }
})

const myOptions = computed(() => {
    if (!data.value || data.value.length === 0) {
        return []
    }
    return data.value.map(item => ({
        value: item.id,
        label: item[props.nameKey],
    }))
})

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
const clear = () => {}

const handleChange = (item: IPCAData) => {
    if (props.multiple) {
        const valueData = data.value!.filter(i => (Array.isArray(myValue.value) ? myValue.value : []).includes(i.id)) || []
        emits('change', item, valueData)
    }
    else {
        emits('change', item, item)
        togglePopoverVisible(false)
    }
}

const handleLimit = (item: IPCAData) => {
    emits('limit', props.limit!, item)
}

const storageKey = computed(() => `vc-pca-picker-${props.source}`)
const fetchData = async (): Promise<IPCAData[]> => {
    // 有缓存
    const storageData = storage.get(storageKey.value)
    if (storageData) {
        return storageData as IPCAData[]
    }

    // 无缓存
    loading.value = true
    try {
        const sourceUrl = crosProxy ? `${crosProxy}${encodeURIComponent(`${pcaBaseUrl}/${props.source}.json`)}` : `${pcaBaseUrl}/${props.source}.json`
        const res = await fetch(sourceUrl)
        const data = await res.json()
        storage.set(storageKey.value, data)
        return data
    }
    catch (error) {
        console.error(error)
        return []
    }
    finally {
        loading.value = false
    }
}

onMounted(async () => {
    const myData = await fetchData()
    data.value = myData?.filter(i => !props.excludeIds?.includes(i.id)) || []
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
