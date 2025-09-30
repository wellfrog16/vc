<template>
    <div :class="$style.wrapper">
        <!-- 历史记录 -->
        <History ref="historyRef" v-bind="props" :value="myModelValue" @click="handleClick" />

        <!-- 热门 -->
        <Hot v-bind="props" :value="myModelValue" @click="handleClick" />

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
import { shallowRef } from 'vue'
import { useVModel } from '@vueuse/core'
import { ElDivider } from 'element-plus'

import History from './history.vue'
import Hot from './hot.vue'
import { getItemClass } from '../source'
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

const myModelValue = useVModel(props, 'modelValue', emits)
// const historyRef = ref<InstanceType<typeof History>>()
const historyRef = shallowRef<any>()

const itemClass = (item: IPCAData) => getItemClass({ ...props, item, value: myModelValue.value })

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
            historyRef.value.addHistory(item.id)
            val.push(item.id)
        }
        myModelValue.value = val
    }
    else {
        historyRef.value.addHistory(item.id)
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
