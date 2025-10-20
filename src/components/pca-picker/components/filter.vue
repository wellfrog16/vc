<template>
    <div class="pca-wrapper">
        <ElDivider content-position="center">
            <ElText>搜索 </ElText>
            <ElText type="primary">{{ keyword }}</ElText>
        </ElDivider>
        <ElRow :gutter="8" class="pca-container">
            <ElCol v-for="item in filterData" :key="item.id" :span="4">
                <div :class="itemClass(item)" @click="clickItem(item)">
                    {{ item[nameKey!] }}
                </div>
            </ElCol>
        </ElRow>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { ElCol, ElDivider, ElRow, ElText } from 'element-plus'

import { injectCommonState } from '../source'
import type { IPCAData } from '../source'

const emits = defineEmits<{
    (e: 'click', value: IPCAData): void
}>()

const { props: commonProps, filterData, itemClass, clickItem, keyword } = injectCommonState()
const { nameKey } = toRefs(commonProps)
</script>

