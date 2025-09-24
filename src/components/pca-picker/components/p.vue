<template>
    <div :class="$style.wrapper">
        <!-- 历史记录 -->
        <ElDivider v-if="history && historyData.length" content-position="left">历史选择</ElDivider>
        <ul v-if="history && historyData.length" class="pca-container">
            <li v-for="item in historyData" :key="item.id" :class="itemClass(item, true)" @click="handleClick(item)">
                {{ item[nameKey] }}
            </li>
        </ul>
        <!-- 热门 -->
        <ElDivider v-if="hotVisible" content-position="left">热门</ElDivider>
        <ul v-if="hotVisible" class="pca-container">
            <li v-for="item in hotData" :key="item.id" :class="itemClass(item, true)" @click="handleClick(item)">
                {{ item[nameKey] }}
            </li>
        </ul>

        <!-- 所有 -->
        <ElDivider content-position="left">全部</ElDivider>
        <ul class="pca-container">
            <li v-for="item in data" :key="item.id" :class="itemClass(item)" @click="handleClick(item)">
                {{ item[nameKey] }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStorage, useVModel } from '@vueuse/core'
import { ElDivider } from 'element-plus'

import type { IPCAData } from '../data'

interface IPropType {
    modelValue: number | number[] | undefined
    // source: 'p' | 'p-py' | 'p-py-fn' | 'pc' | 'pc-py' | 'pc-py-fn' | 'pca' | 'pca-py' | 'pca-py-fn'
    nameKey?: string
    hotIds?: number[] // 热门城市的codes
    history?: boolean // 是否记录历史选择
    historyStorageKey?: string // 历史记录的Storage key
    data?: IPCAData[]
    multiple?: boolean
    activeMark?: boolean
    syncActive?: boolean // 是否在热门和历史选择里同步高亮选中项
    limit?: number // 多选时的数量限制
}

const props = withDefaults(defineProps<IPropType>(), {
    nameKey: 'n',
    data: () => [],
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'change', value: IPCAData): void
    (e: 'limit', value: IPCAData): void
}>()

const myModelValue = useVModel(props, 'modelValue', emits)
const historyIds = useStorage<number[]>(props.historyStorageKey || 'vc-pca-history-p', [])

const itemClass = (item: IPCAData, isHistoryOrHot?: boolean) => {
    const isActive = myModelValue.value === item.id || (Array.isArray(myModelValue.value) && myModelValue.value.includes(item.id))
    return {
        'pca-item': true,
        'active': isActive && (!isHistoryOrHot || props.syncActive),
        'active-mark': isActive && props.activeMark,
    }
}
const hotVisible = computed(() => props.hotIds && props.hotIds.length > 0)
const hotData = computed(() => {
    if (!props.hotIds || props.hotIds.length === 0) {
        return []
    }
    return props.data?.filter(i => props.hotIds?.includes(i.id)) || []
})
const historyData = computed(() => {
    if (!props.history || !historyIds.value || historyIds.value.length === 0) {
        return []
    }
    const data: IPCAData[] = []
    historyIds.value.forEach(id => {
        const item = props.data?.find(i => i.id === id)
        if (item) {
            data.push(item)
        }
    })
    return data
})

const addHistory = (id: number) => {
    if (!props.history) { return }
    const ids = historyIds.value || []
    const index = ids.indexOf(id)
    if (index > -1) { ids.splice(index, 1) }
    ids.unshift(id)
    if (ids.length > 6) { ids.splice(6) }
    historyIds.value = ids
}

const handleClick = (item: IPCAData) => {
    if (props.multiple) {
        const val = Array.isArray(myModelValue.value) ? [...myModelValue.value] : []
        const index = val.indexOf(item.id)
        if (index > -1) {
            val.splice(index, 1)
        }
        else {
            if (props.limit && val.length >= props.limit) {
                emits('limit', item)
                return
            }
            addHistory(item.id)
            val.push(item.id)
        }
        myModelValue.value = val
    }
    else {
        addHistory(item.id)
        myModelValue.value = item.id
    }
    emits('change', item)
}
</script>

<style lang="scss" module>
.wrapper {
    $column: 6;

    width: $column * 100px + ( $column - 1) * 8px;
}
</style>
