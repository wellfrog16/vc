<template>
    <ElDivider v-if="hotVisible" content-position="left">热门</ElDivider>
    <ul v-if="hotVisible" class="pca-container">
        <li v-for="item in hotData" :key="item.id" :class="itemClass(item)" @click="emits('click', item)">
            {{ item[nameKey] }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { ElDivider } from 'element-plus'

import { getItemClass } from '../source'
import type { IPCAData } from '../source'

interface IPropType {
    value: number | number[] | undefined
    nameKey?: string
    hotIds?: number[] // 热门城市的id
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
const hotVisible = computed(() => props.hotIds && props.hotIds.length > 0)
const hotData = computed(() => {
    if (!props.hotIds || props.hotIds.length === 0) {
        return []
    }
    return props.data?.filter(i => props.hotIds?.includes(i.id)) || []
})
</script>

