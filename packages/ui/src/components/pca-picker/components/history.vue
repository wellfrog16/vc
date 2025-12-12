<template>
    <!-- 历史记录 -->
    <ElDivider v-if="history && historyData.length" content-position="left">{{ historyText }}</ElDivider>
    <ElRow v-if="history && historyData.length" :gutter="8" class="vc-pca-container">
        <ElCol v-for="item in historyData" :key="item.id" :span="4">
            <div :class="itemClass(item, true)" @click="clickItem(item)">
                {{ item[nameKey!] }}
            </div>
        </ElCol>
    </ElRow>
</template>

<script setup lang="ts">
import { injectCommonState } from '../pca-picker'

const { props: commonProps, historyData, itemClass, clickItem } = injectCommonState()
const { nameKey, history, historyText } = toRefs(commonProps)
</script>
