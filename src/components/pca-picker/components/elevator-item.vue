<template>
    <div :id="label" :class="$style.label">{{ label }}</div>
    <ElRow :gutter="8" class="pca-container" :class="$style['pca-container']">
        <ElCol v-for="item in data" :key="item.id" :span="4">
            <div :class="itemClass(item)" @click="clickItem(item)">
                {{ item[nameKey!] }}
            </div>
        </ElCol>
    </ElRow>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { ElCol, ElRow } from 'element-plus'

import { injectCommonState } from '../source'
import type { IPCAData } from '../source'

interface IPropType {
    label: string
    data: IPCAData[]
}

defineProps<IPropType>()

const { props: commonProps, itemClass, clickItem } = injectCommonState()
const { nameKey } = toRefs(commonProps)
</script>

<style lang="scss" module>
.label {
    padding: 2px 0;
}

.pca-container {
    margin-bottom: 4px !important;
}
</style>
