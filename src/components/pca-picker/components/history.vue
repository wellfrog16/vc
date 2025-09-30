<template>
    <!-- 历史记录 -->
    <ElDivider v-if="history && historyData.length" content-position="left">历史选择</ElDivider>
    <ul v-if="history && historyData.length" class="pca-container">
        <li v-for="item in historyData" :key="item.id" :class="itemClass(item)" @click="emits('click', item)">
            {{ item[nameKey] }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { ElDivider } from 'element-plus'

import { getItemClass } from '../source'
import type { IPCAData } from '../source'

interface IPropType {
    value: number | number[] | undefined
    nameKey?: string
    history?: boolean // 是否记录历史选择
    historyStorageKey?: string // 历史记录的Storage key
    data?: IPCAData[]
    activeMark?: boolean
    syncActive?: boolean // 是否在热门和历史选择里同步高亮选中项
}

const props = withDefaults(defineProps<IPropType>(), {
    nameKey: 'n',
    data: () => [],
})

const emits = defineEmits<{
    (e: 'click', value: IPCAData): void
}>()

const itemClass = (item: IPCAData) => getItemClass({ ...props, item, isHistoryOrHot: true })
const historyIds = useStorage<number[]>(props.historyStorageKey || 'vc-pca-history-p', [])
const historyData = computed(() => {
    if (!props.history || !historyIds.value || historyIds.value.length === 0) {
        return []
    }
    const data: IPCAData[] = []
    historyIds.value.forEach(id => {
        const item = props.data?.find(i => i.id === id)
        item && data.push(item)
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

defineExpose({ addHistory })
</script>
