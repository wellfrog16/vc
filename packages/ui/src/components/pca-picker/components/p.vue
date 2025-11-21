<template>
    <div class="pca-wrapper">
        <!-- 历史记录 -->
        <History />

        <!-- 热门 -->
        <Hot />

        <!-- 所有 -->
        <ElDivider content-position="left">全部</ElDivider>
        <ElRow :gutter="8" class="pca-container">
            <ElCol v-for="item in availableData" :key="item.id" :span="4">
                <div :class="itemClass(item)" @click="clickItem(item)">
                    {{ item[nameKey!] }}
                </div>
            </ElCol>
        </ElRow>
    </div>
</template>

<script setup lang="ts">
import { ElCol, ElDivider, ElRow } from 'element-plus'

import { injectCommonState } from '../pca-picker'
import History from './history.vue'
import Hot from './hot.vue'

const { props: commonProps, availableData, itemClass, clickItem } = injectCommonState()
const { nameKey } = commonProps
</script>
