<template>
    <div :class="$style.wrapper">1122</div>
</template>

<script setup lang="ts">
import { ElDivider } from 'element-plus'

import type { IPCAData } from '../source'

interface IPropType {
    modelValue: number | number[] | undefined
    // source: 'p' | 'p-py' | 'p-py-fn' | 'pc' | 'pc-py' | 'pc-py-fn' | 'pca' | 'pca-py' | 'pca-py-fn'
    nameKey?: string
    hotIds?: number[] // 热门城市的id
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
</script>

<style lang="scss" module>
.wrapper {
    $column: 6;

    width: $column * 100px + ( $column - 1) * 8px;
}
</style>
